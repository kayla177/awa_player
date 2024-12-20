import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
    return (
        // Define the PlayButton component
        <button
            className="
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-amber-700 
        p-4 
        drop-shadow-md 
        translate
        translate-y-1/4
        group-hover:opacity-100 
        group-hover:translate-y-0
        hover:scale-110
      "
        >
            <FaPlay className="text-white" />
        </button>
    );
}

export default PlayButton;