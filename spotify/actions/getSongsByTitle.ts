import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

import { Song } from "@/types";

import getSongs from "./getSongs";

// Function to search songs by their title
const getSongsByTitle = async (title: string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    if (!title) {
        const allSongs = await getSongs();
        return allSongs;
    }

    // Query songs from the 'songs' table filtered by title (case-insensitive search)
    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .ilike('title', `%${title}%`)//give your precise algorithm
        .order('created_at', { ascending: false })

    if (error) {
        console.log(error.message);
    }

    return (data as any) || [];
};

export default getSongsByTitle;