import { saveWorkout, getWorkouts } from './supabaseWorkout';
import { signUp, signIn, signOut, getCurrentUser } from './supabaseAuth';
import React, { useState, useEffect } from 'react';

function AuthUI({ onAuth, showInfo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    let res;
    if (mode === 'login') {
      res = await signIn(email, password);
      setLoading(false);
      if (res.error) setError(res.error.message);
      else onAuth();
    } else {
      res = await signUp(email, password);
      setLoading(false);
      if (res.error) setError(res.error.message);
      else setSuccess('Registrazione avvenuta! Controlla la tua email per confermare e completare l’accesso.');
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#f7f7fa', borderRadius:'16px', boxShadow:'0 4px 24px #0001', maxWidth:'400px', margin:'auto', padding:'2em'}}>
      <h2 style={{color:'#2d2d2d', marginBottom:'1em'}}>{mode === 'login' ? 'Login' : 'Registrazione'}</h2>
      {showInfo && (
        <div style={{background:'#eaf6ff', color:'#1a5a8a', borderRadius:'8px', padding:'1em', marginBottom:'1em', fontSize:'1em'}}>
          <div>Per registrare i tuoi allenamenti è necessario un login personalizzato.</div>
          <div>I tuoi dati sono protetti e non vengono diffusi, come previsto da Supabase.</div>
          <div>Riceverai una mail per confermare la registrazione.</div>
        </div>
      )}
      <input style={{margin:'0.5em', padding:'0.7em', borderRadius:'8px', border:'1px solid #ccc', width:'100%'}} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input style={{margin:'0.5em', padding:'0.7em', borderRadius:'8px', border:'1px solid #ccc', width:'100%'}} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button style={{margin:'1em', padding:'0.7em 2em', borderRadius:'8px', background:'#1a5a8a', color:'#fff', border:'none', fontWeight:'bold'}} onClick={handleAuth} disabled={loading}>
        {loading ? 'Attendi...' : (mode === 'login' ? 'Login' : 'Registrati')}
      </button>
      <button style={{margin:'0.5em', padding:'0.7em 2em', borderRadius:'8px', background:'#fff', color:'#1a5a8a', border:'1px solid #1a5a8a', fontWeight:'bold'}} onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setSuccess(''); setError(''); }} disabled={loading}>
        {mode === 'login' ? 'Registrati' : 'Login'}
      </button>
      <div>
        {error && <div style={{color:'red', marginTop:'1em'}}>{error}</div>}
        {success && <div style={{color:'green',marginTop:'1em'}}>{success}</div>}
      </div>
    </div>
  );
}

function WorkoutSaver({ user, showLogin }) {
  const [name, setName] = useState(''); // Titolo allenamento
  const [date, setDate] = useState('');
  const [data, setData] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      getWorkouts(user.id).then(res => {
        if (res.data) setWorkouts(res.data);
      });
    }
  }, [user]);

  const handleSave = async () => {
    setMessage('');
    setError('');
    if (!user) {
      showLogin();
      return;
    }
    if (!name || !date || !data) {
      setError('Compila tutti i campi!');
      return;
    }
    const err = await saveWorkout({ name, date, data, user_id: user.id });
    if (err) {
      setError('Errore nel salvataggio.');
    } else {
      setMessage('Allenamento salvato con successo!');
      setName('');
      setDate('');
      setData('');
      getWorkouts(user.id).then(res => {
        if (res.data) setWorkouts(res.data);
      });
    }
  };

  return (
    <div style={{margin:'2em'}}>
      <h2>Salva allenamento</h2>
      <div style={{display:'flex', gap:'0.5em', marginBottom:'1em'}}>
        <input placeholder="Titolo allenamento" value={name} onChange={e => setName(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <textarea placeholder="Dettagli" value={data} onChange={e => setData(e.target.value)} style={{minWidth:'180px'}} />
        <button onClick={handleSave}>Salva</button>
      </div>
      <div>
        {error && <div style={{color:'red',marginTop:'1em'}}>{error}</div>}
        {message && <div style={{color:'green',marginTop:'1em'}}>{message}</div>}
      </div>
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
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    getCurrentUser().then(res => {
      if (res.data && res.data.user) setUser(res.data.user);
    });
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  // Mostra subito l'app completa (WorkoutSaver, lista, ecc.)
  // Login compare solo se si tenta di salvare un allenamento
  return (
    <div>
      {user && <button onClick={handleLogout} style={{margin:'2em', padding:'0.7em 2em', borderRadius:'8px', background:'#fff', color:'#1a5a8a', border:'1px solid #1a5a8a', fontWeight:'bold'}}>Logout</button>}
      <WorkoutSaver user={user} showLogin={() => setShowLogin(true)} />
      {showLogin && !user && (
        <AuthUI onAuth={() => {
          getCurrentUser().then(res => {
            if (res.data && res.data.user) setUser(res.data.user);
          });
          setShowLogin(false);
        }} showInfo={true} />
      )}
    </div>
  );
}

export default App;
