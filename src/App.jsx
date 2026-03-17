import { saveWorkout, getWorkouts } from './supabaseWorkout';
import { signUp, signIn, signOut, getCurrentUser } from './supabaseAuth';
import React, { useState, useEffect } from 'react';

function AuthUI({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAuth = async () => {
    setError('');
    setSuccess('');
    let res;
    if (mode === 'login') {
      res = await signIn(email, password);
      if (res.error) setError(res.error.message);
      else onAuth();
    } else {
      res = await signUp(email, password);
      if (res.error) setError(res.error.message);
      else setSuccess('Registrazione avvenuta! Controlla la tua email per confermare e completare l’accesso.');
    }
  };

  return (
    <div style={{margin:'2em'}}>
      <h2>{mode === 'login' ? 'Login' : 'Registrazione'}</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleAuth}>{mode === 'login' ? 'Login' : 'Registrati'}</button>
      <button onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setSuccess(''); setError(''); }} style={{marginLeft:'1em'}}>
        {mode === 'login' ? 'Registrati' : 'Login'}
      </button>
      {error && <div style={{color:'red'}}>{error}</div>}
      {success && <div style={{color:'green',marginTop:'1em'}}>{success}</div>}
    </div>
  );
}

function WorkoutSaver({ user }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState('');
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (user) {
      getWorkouts(user.id).then(res => {
        if (res.data) setWorkouts(res.data);
      });
    }
  }, [user]);

  const handleSave = async () => {
    await saveWorkout({ name, date, data, user_id: user.id });
    getWorkouts(user.id).then(res => {
      if (res.data) setWorkouts(res.data);
    });
  };

  return (
    <div style={{margin:'2em'}}>
      <h2>Salva allenamento</h2>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <textarea placeholder="Dettagli" value={data} onChange={e => setData(e.target.value)} />
      <button onClick={handleSave}>Salva</button>
      <h3>Allenamenti salvati</h3>
      <ul>
        {workouts.map(w => (
          <li key={w.id}>{w.name} - {w.date} - {w.data}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then(res => {
      if (res.data && res.data.user) setUser(res.data.user);
    });
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  if (!user) return <AuthUI onAuth={() => {
    getCurrentUser().then(res => {
      if (res.data && res.data.user) setUser(res.data.user);
    });
  }} />;

  return (
    <div>
      <button onClick={handleLogout} style={{margin:'2em'}}>Logout</button>
      <WorkoutSaver user={user} />
    </div>
  );
}

export default App;
