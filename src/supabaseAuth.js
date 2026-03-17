import { supabase } from './supabaseClient';

// Funzione per registrare un nuovo utente
export async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  });
  return { user, error };
}

// Funzione per login
export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { user, error };
}

// Funzione per logout
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}

// Funzione per ottenere l'utente attuale
export function getCurrentUser() {
  return supabase.auth.getUser();
}
