import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay2 = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user, subscription } = useUser();
    const subscribeModal = useSubscribeModal();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        if (!subscription) {
            return subscribeModal.onOpen();
        }


        const ids: string[] = songs.map((song) => String(song.id));

        // Set the current active song ID
        player.setId(id);
        player.setIds(ids);//create playlist of the current song, e.g., if 2 songs in search, create a list for those two
    }

    return onPlay;
};

export default useOnPlay2;