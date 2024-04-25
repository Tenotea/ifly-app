import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tdnbqilqerrigsvykmuq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbmJxaWxxZXJyaWdzdnlrbXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNDUyMzAsImV4cCI6MjAyOTYyMTIzMH0.gCtAG5N4DWMr00vw9lJA9rMjAMuaoh8D5zV6spt0IJM"
);

export default supabase;
