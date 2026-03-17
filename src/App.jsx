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
    <div style={{
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#f7f7fa', borderRadius:'16px', boxShadow:'0 4px 24px #0001', maxWidth:'400px', margin:'auto', padding:'2em'}}>
      <h2 style={{color:'#2d2d2d', marginBottom:'1em'}}>{mode === 'login' ? 'Login' : 'Registrazione'}</h2>
      {showInfo && (
        <div style={{background:'#eaf6ff', color:'#1a5a8a', borderRadius:'8px', padding:'1em', marginBottom:'1em', fontSize:'1em'}}>
          Per registrare i tuoi allenamenti è necessario un login personalizzato.<br />
          I tuoi dati sono protetti e non vengono diffusi, come previsto da Supabase.<br />
          Riceverai una mail per confermare la registrazione.
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
      {error && <div style={{color:'red', marginTop:'1em'}}>{error}</div>}
      {success && <div style={{color:'green',marginTop:'1em'}}>{success}</div>}
    </div>
  );
}

function HomeUI() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#fff'}}>
      <h1 style={{color:'#1a5a8a', fontSize:'2.5em', margin:'1em'}}>Workout Tracker</h1>
      <img src="/images/exercises/goodmorning.png" alt="Workout" style={{width:'180px', margin:'1em', borderRadius:'12px', boxShadow:'0 2px 8px #0002'}} />
      <p style={{maxWidth:'500px', fontSize:'1.2em', color:'#333', margin:'1em'}}>Benvenuto! Qui puoi consultare esercizi, video e salvare i tuoi allenamenti. Per registrare i tuoi allenamenti, è necessario effettuare il login.</p>
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

  if (!user && !showLogin) {
    return (
      <div>
        <HomeUI />
        <div style={{display:'flex', justifyContent:'center', margin:'2em'}}>
          <button style={{padding:'1em 2em', borderRadius:'8px', background:'#1a5a8a', color:'#fff', border:'none', fontWeight:'bold', fontSize:'1.1em'}} onClick={() => setShowLogin(true)}>
            Registrare allenamenti
          </button>
        </div>
      </div>
    );
  }

  if (!user && showLogin) {
    return <AuthUI onAuth={() => {
      getCurrentUser().then(res => {
        if (res.data && res.data.user) setUser(res.data.user);
      });
      setShowLogin(false);
    }} showInfo={true} />;
  }

  return (
    <div>
      <button onClick={handleLogout} style={{margin:'2em', padding:'0.7em 2em', borderRadius:'8px', background:'#fff', color:'#1a5a8a', border:'1px solid #1a5a8a', fontWeight:'bold'}}>Logout</button>
      <WorkoutSaver user={user} />
    </div>
  );
}

export default App;
