import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
    const supabaseClient = useSupabaseClient();
    //if everyone can see the content, e.g. songs, we can use useSupabaseClient
    //if only authenticated user can see, use useSessionClient

    if (!song) {
        return '';
    }

    const { data: songData } = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path);

    return songData.publicUrl;
};

export default useLoadSongUrl;