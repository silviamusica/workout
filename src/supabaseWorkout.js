import { supabase } from './supabaseClient';

// Salva un allenamento
export async function saveWorkout({ name, date, data, user_id }) {
  const { error } = await supabase
    .from('workouts')
    .insert([{ name, date, data, user_id }]);
  return error;
}

// Recupera tutti gli allenamenti
export async function getWorkouts(user_id) {
  const { data, error } = await supabase
    .from('workouts')
    .select('*')
    .eq('user_id', user_id); // rimuovi .eq se non usi autenticazione
  return { data, error };
}
