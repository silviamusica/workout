// ...existing code...
import { saveWorkout, getWorkouts } from './supabaseWorkout';

// Esempio di form React per salvare un allenamento
import React, { useState, useEffect } from 'react';

function WorkoutSaver() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState('');
  const [workouts, setWorkouts] = useState([]);

  // Carica allenamenti all'avvio
  useEffect(() => {
    getWorkouts('silvia').then(res => {
      if (res.data) setWorkouts(res.data);
    });
  }, []);

  const handleSave = async () => {
    await saveWorkout({ name, date, data, user_id: 'silvia' });
    // Aggiorna lista
    getWorkouts('silvia').then(res => {
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

// ...existing code...
