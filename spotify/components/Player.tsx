"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById"

import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);//chance os song to be undefined so !

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
            <PlayerContent 
            song={song} 
            songUrl={songUrl}
            key={songUrl} //when every it changes, it completely destroyed..
            //reset the entire hook, //the songs may be overlap
            />
        </div>
    );
}

export default Player;