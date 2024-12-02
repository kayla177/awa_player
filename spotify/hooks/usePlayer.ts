import { create } from 'zustand';

// Define the structure of the player's state
interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}

// Create a Zustand store to manage the player's state
const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    activeId: undefined,
    setId: (id: string) => set({ activeId: id }),
    setIds: (ids: string[]) => set({ ids }),
    reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;