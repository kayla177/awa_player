import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { error } from "console";
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    // Fetch the current session from Supabase
    const {
        data: { session },
    } = await supabase.auth.getSession();

    // Query liked songs from the 'liked_songs' table, join with 'songs' table
    const { data } = await supabase
        .from('liked_songs')
        .select('*, songs(*)')// Fetch all liked songs and their related song data
        .eq('user_id', session?.user?.id)// Filter by current user's ID
        .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
        return [];
    }

    if (!data) return [];

    return data.map((item) => ({
        ...item.songs
    }))
};

export default getLikedSongs;