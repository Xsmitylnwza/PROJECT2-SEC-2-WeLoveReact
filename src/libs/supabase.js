import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://fnagtifgkwzvvfbqwmvf.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_gEMMJ7u7MOHccm2O75_dxw_Avpf7z39";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
