declare module 'use-sound' {
    export default function useSound(
        src: string | { [key: string]: string },
        options?: {
            volume?: number;
            playbackRate?: number;
            soundEnabled?: boolean;
            sprite?: { [key: string]: [number, number] };
            audioContext?: AudioContext;
            format?: string[];
            id?: string;
            forceDecode?: boolean;
            preload?: boolean;
            onload?: () => void;
            onloaderror?: (error: any) => void;
            onend?: () => void;
            onpause?: () => void;
            onplay?: () => void;
            onresume?: () => void;
            onstop?: () => void;
            onseek?: (position: number) => void;
        }
    ): [
            { play: () => void; stop: () => void; pause?: () => void; seek: (position: number) => void },
            { position: number; duration: number; buffered: number }
        ];
}
