import { supabase } from "./supabaseClient";

export async function getTables() {
  const { data, error } = await supabase.from("tables").select("*");
  if (error) throw error;
  return data;
}
