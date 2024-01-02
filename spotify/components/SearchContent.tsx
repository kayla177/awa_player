import { Song } from "@/types";
import MediaItem2 from "@/components/MediaItem2";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";


import Image from 'next/image';


interface SearchContentProps {
  songs: Song[];
  onPlay: (id: string) => void;
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1 flex items-center gap-x-4">
          <Image
              src={song.image_path} 
              alt={`${song.author} - ${song.title}`}
              width={50} 
              height={50}
            />
            <MediaItem2 onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={String(song.id)} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
