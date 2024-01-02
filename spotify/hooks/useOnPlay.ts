import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        const ids: string[] = songs.map((song) => String(song.id));

        player.setId(id);
        player.setIds(ids);//create playlist of the current song, e.g., if 2 songs in search, create a list for those two
    }

    return onPlay;
};

export default useOnPlay;