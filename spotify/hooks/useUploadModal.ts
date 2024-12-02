import { create } from 'zustand';

interface UploadModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// Create a Zustand store to manage the modal's state
const useUploadModal = create<UploadModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;

// Zustand allows share the state (isOpen, onOpen, onClose) across multiple components without prop drilling.
