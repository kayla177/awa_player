import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

// Function to fetch a single song by its ID
const getSongById = async (id: string): Promise<Song> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('id', id)// Filter by song ID
    .single();// Ensure only one result is returned

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongById;