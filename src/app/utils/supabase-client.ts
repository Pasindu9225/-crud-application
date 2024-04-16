import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const url = "https://dhpfkjtbjlscemhgwtdx.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocGZranRiamxzY2VtaGd3dGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNTY5NjUsImV4cCI6MjAyODgzMjk2NX0.gK7ZCxJvKCHCspiE-qWZ__nDsRPw-JskCeYBPYyGOIs";

export const supabase = createClient(url, key);

export const database = async () => {
  try {
    createClient(url, key);
    console.log("sucess connected to supabase");
  } catch (error) {
    console.log(error);
  }
};
