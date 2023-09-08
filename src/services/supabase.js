import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://khxodidxbyrtaphtgdzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoeG9kaWR4YnlydGFwaHRnZHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NjI4NTUsImV4cCI6MjAwODUzODg1NX0.bcBMAZwKzH9BYmkJB7XIyJeCbuPXrAE5L9vfoYJaqD4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
