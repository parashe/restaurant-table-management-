import { supabase } from "./supabaseClient";

export async function signIn(email: string) {
  return supabase.auth.signInWithOtp({ email });
}

export async function signOut() {
  return supabase.auth.signOut();
}
