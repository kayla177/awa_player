"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById"

import PlayerContent from "./PlayerContent";

const Player = () => {
    // Access player state
    const player = usePlayer();
    // Fetch song details using active song ID
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);//chance of song to be undefined so !

    // Return nothing if there's no active song, song details, or song URL
    if (!song || !songUrl || !player.activeId) {
        return null;
    }

    return (
        <div
            className="
        fixed 
        bottom-0 
        bg-amber-950 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
        >
            {/* Render the player content with the current song and URL */}
            <PlayerContent
                song={song}
                songUrl={songUrl}
                key={songUrl} // Reset the player when the song changes
            />
        </div>
    );
}

export default Player;