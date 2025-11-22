import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qeenwpyrtaofrkajbulr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZW53cHlydGFvZnJrYWpidWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMDk4NDUsImV4cCI6MjA3ODg4NTg0NX0.9wWX0hnU74vs2EEJ9eLmHL4gDWakUc1GQ7Ws0zsOHP0";

export const supabase = createClient(supabaseUrl, supabaseKey);