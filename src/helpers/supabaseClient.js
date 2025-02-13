import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://nyojpwihwdbyqjtxttwb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55b2pwd2lod2RieXFqdHh0dHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyNjM3NjEsImV4cCI6MjA1NDgzOTc2MX0.p3_kj6Bn6fHQJEDP9JNVMyyq7Pto4pG4r_vtHdsovus";

  const supabase = createClient(supabaseURL,supabaseAnonKey)

  export default supabase;