// "use client";

// import { Album } from "@/types";
// import MediaItem from "@/components/MediaItem";
// import LikeButton from "@/components/LikeButton";
// import useOnPlay from "@/hooks/useOnPlay";
// import { twMerge } from "tailwind-merge";


// interface SearchContentProps {
//   songs: Song[];
// }

// const SearchContent: React.FC<SearchContentProps> = ({
//   songs
// }) => {
//   const onPlay = useOnPlay(songs);

//   if (songs.length === 0) {
//     return (
//       <div
//         className="
//           flex 
//           flex-col 
//           gap-y-2 
//           w-full 
//           px-6 
//           text-neutral-400
//         "
//       >
//         No songs found.
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col gap-y-2 w-full px-6">
//       {songs.map((song) => (
//         <div
//           key={song.id}
//           className="flex items-center gap-x-4 w-full"
//         >
//           <div className="flex-1">
//             <MediaItem
//               onClick={(id: string) => onPlay(id)}
//               data={song}
//             />
//           </div>
//           <LikeButton songId={song.id} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchContent;


// interface SearchContentProps {
//   albums: Album[];
// }

// const SearchContent: React.FC<SearchContentProps> = ({ albums }) => {
//   if (albums.length === 0) {
//     return (
//       <div
//         className={twMerge(`
//           flex 
//           flex-col 
//           gap-y-2 
//           w-full 
//           px-6 
//           text-neutral-400
//         `)}
//       >
//         No albums found.
//       </div>
//     );
//   }

//   return (
//     <div className={twMerge(`flex flex-col gap-y-2 w-full px-6`)}>
//       {albums.map((album, i) => (
//         <div
//           key={i}
//           className={twMerge(`flex items-center gap-x-4 w-full`)}
//         >
//           <div className={twMerge(`flex-1`)}>
//             <MediaItem data={album} />
//           </div>

//           <LikeButton albumId={album.id} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchContent;




// "use client";

// import { Song } from "@/types";
// import MediaItem from "@/components/MediaItem";
// import LikeButton from "@/components/LikeButton";
// import useOnPlay from "@/hooks/useOnPlay";

// interface SearchContentProps {
//   songs: Song[];
// }

// const SearchContent: React.FC<SearchContentProps> = ({
//   songs
// }) => {
//   const onPlay = useOnPlay(songs);

//   if (songs.length === 0) {
//     return (
//       <div
//         className="
//           flex 
//           flex-col 
//           gap-y-2 
//           w-full 
//           px-6 
//           text-neutral-400
//         "
//       >
//         No songs found.
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col gap-y-2 w-full px-6">
//       {songs.map((song) => (
//         <div
//           key={song.id}
//           className="flex items-center gap-x-4 w-full"
//         >
//           <div className="flex-1">
//             <MediaItem
//               onClick={(id: string) => onPlay(id)}
//               data={song}
//             />
//             <div className="flex items-center gap-x-4 w-full">
//               <div className="flex-1">
//                 <div
//                   onClick={(id: string) => onPlay(id)}
//                   className="
//                     flex 
//                     items-center 
//                     gap-x-3 
//                     cursor-pointer 
//                     hover:bg-neutral-800/50 
//                     w-full 
//                     p-2 
//                     rounded-md
//                   "
//                 >
//                   <div
//                     className="
//                       relative 
//                       rounded-md 
//                       min-h-[48px] 
//                       min-w-[48px] 
//                       overflow-hidden
//                     "
//                   >
//                     <img
//                       src={song.image_path || "/images/music-placeholder.png"}
//                       alt="MediaItem"
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-y-1 overflow-hidden">
//                     <p className="text-white truncate">{song.title}</p>
//                     <p className="text-neutral-400 text-sm truncate">
//                       By {song.author}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <LikeButton songId={song.id} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SearchContent;












// "use client";

// import qs from "query-string";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import useDebounce from "@/hooks/useDebounce";

// import Input from "./Input";

// const SearchInput = () => {
//     const router = useRouter();
//     const [value, setValue] = useState<string>('');
//     const debouncedValue = useDebounce<string>(value, 500);

//     useEffect(() => {
//         const query = {
//             title: debouncedValue,
//         };

//         const url = qs.stringifyUrl({
//             url: '/search',
//             query
//         });

//         router.push(url);
//     }, [debouncedValue, router]);

//     return (
//         <Input
//             placeholder="What do you want to listen to?"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//         />
//     );
// }

// export default SearchInput;































// import getSongsByTitle from "@/actions/getSongsByTitle";
// import Header from "@/components/Header";
// import SearchInput from "@/components/SearchInput";
// import { twMerge } from "tailwind-merge";

// import SearchContent from "@/components/SearchContent";

// interface SearchProps {
//     searchParams: {
//         title: string;
//     }
// };

// export const revalidate = 0;

// const Search = async ({ searchParams }: SearchProps) => {
//     const songs = await getSongsByTitle(searchParams.title);

//     return (
//         <div
//             className={twMerge(`
//         h-full 
//         bg-gradient-to-b 
//         from-yellow-800 
//         `)}>
//                 <div
//                     className="
//           bg-yellow-950 
//           rounded-lg 
//           h-full 
//           w-full 
//           overflow-hidden 
//           overflow-y-auto
//         "
//                 >
//                     <Header className="from-bg-neutral-900">
//                         <div className="mb-2 flex flex-col gap-y-6">
//                             <h1 className="text-white text-3xl font-semibold">
//                                 Search
//                             </h1>
//                             <SearchInput />
//                         </div>
//                     </Header>
//                     <SearchContent songs={songs} />
//                 </div>
//         </div >
//     )
// };

// export default Search;



// "use client"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
// import { twMerge } from 'tailwind-merge';
// import { useState, useEffect } from 'react';




// import getSongsByTitle from "@/actions/getSongsByTitle";
// import Header from "@/components/Header";
// import SearchInput from "@/components/SearchInput";

// import SearchContent from "@/components/SearchContent";




// const CLIENT_ID: string = 'b15596def410467a87e5c58f8a1ce1f8';
// const CLIENT_SECRET: string = '7d50f853b9264ffc8a457f53f2b787e5';

// interface Album {
//   images: { url: string }[];
//   name: string;
// }

// export const revalidate = 0;

// function App(): JSX.Element {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [accessToken, setAccessToken] = useState<string>("");
//   const [album, setAlbums] = useState<Album[]>([]);

//   useEffect(() => {
//     // API accessToken

//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
//     };

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token));
//   }, []);

//   // SEARCH

//   async function search(): Promise<void> {
//     console.log('Search for ' + searchInput);

//     var searchParameters = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };

//     var artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, searchParameters)
//       .then(response => response.json())
//       .then(data => data.artists.items[0].id);

//     var returnedAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`, searchParameters)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setAlbums(data.items);
//       });
//   }


//   return (
//     <div className={twMerge(`h-full bg-gradient-to-b from-yellow-800 `)}>
//       <div className="bg-yellow-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
//         <Header className="from-bg-neutral-900">
//           <div className="mb-2 flex flex-col gap-y-4">
//             <h1 className="text-white text-2xl font-semibold">Search</h1>
//             <div className="flex items-center">
//               <InputGroup className="mb-2" size="sm">
//                 <FormControl
//                   placeholder="What do you want to listen to?"
//                   type="input"
//                   onKeyPress={(event) => {
//                     if (event.key === 'Enter') {
//                       search();
//                     }
//                   }}
//                   onChange={(event) => setSearchInput(event.target.value)}
//                   className="bg-gray-200 text-gray-800 rounded-none"
//                 />
//               </InputGroup>
//               <Button
//                 onClick={search}
//                 className={twMerge(`
//                   rounded-none
//                   bg-orange-500
//                   border
//                   border-transparent
//                   px-3
//                   py-2
//                   disabled:cursor-not-allowed
//                   disabled:opacity-50
//                   text-white
//                   font-bold
//                   hover:opacity-75
//                   transition
//                 `)}
//               >
//                 Search
//               </Button>
//             </div>
//           </div>
//         </Header>

//         <Container>
//           <Row className='mx-2 row row-cols-4'>
//             {album.map((album, i) => (
//               <Card key={i}>
//                 <Card.Img src={album.images[0].url} />
//                 <Card.Body>
//                   <Card.Title>{album.name}</Card.Title>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default App;









//album



// "use client"
// import { useState, useEffect } from 'react';
// import { twMerge } from 'tailwind-merge';
// import Header from '@/components/Header';
// import SearchInput from '@/components/SearchInput';
// import { Button, InputGroup, FormControl, Container, Row, Card } from 'react-bootstrap';

// const CLIENT_ID: string = 'b15596def410467a87e5c58f8a1ce1f8';
// const CLIENT_SECRET: string = '7d50f853b9264ffc8a457f53f2b787e5';

// interface Album {
//   images: { url: string }[];
//   name: string;
// }

// export const revalidate = 0;

// function App(): JSX.Element {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [accessToken, setAccessToken] = useState<string>("");
//   const [album, setAlbums] = useState<Album[]>([]);

//   useEffect(() => {
//     // API accessToken
//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
//     };

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token));
//   }, []);

//   // SEARCH
//   async function search(): Promise<void> {
//     console.log('Search for ' + searchInput);

//     var searchParameters = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };

//     var artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, searchParameters)
//       .then(response => response.json())
//       .then(data => data.artists.items[0]?.id);

//     if (artistID) {
//       var returnedAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`, searchParameters)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setAlbums(data.items || []);
//         });
//     }
//   }

//   return (
//     <div className={twMerge(`h-full bg-gradient-to-b from-yellow-800 `)}>
//       <div className={twMerge(`bg-yellow-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto`)}>
//         <Header className={twMerge(`from-bg-neutral-900`)}>
//           <div className={twMerge(`mb-4 flex flex-col gap-y-6`)}>
//             <h1 className={twMerge(`text-white text-3xl font-semibold`)}>Search</h1>
//             <div className={twMerge(`flex items-center`)}>
//               <InputGroup className={twMerge(`mb-2 w-full`)} size="lg">
//                 <FormControl
//                   placeholder="What do you want to listen to?"
//                   type="input"
//                   onKeyPress={(event) => {
//                     if (event.key === 'Enter') {
//                       search();
//                     }
//                   }}
//                   onChange={(event) => setSearchInput(event.target.value)}
//                   className={twMerge(`bg-gray-200 text-gray-800 rounded-lg w-full py-2`)}
//                 />
//               </InputGroup>

//             </div>
//           </div>
//         </Header>

//         <Container>
//           <Row className={twMerge(`mx-2 row row-cols-4`)}>
//             {album.map((album, i) => (
//               <Card key={i} className={twMerge(`mb-3`)}>
//                 <Card.Img src={album.images[0]?.url} />
//                 <Card.Body>
//                   <Card.Title>{album.name}</Card.Title>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default App;











// "use client";
// import { useState, useEffect } from 'react';
// import { twMerge } from 'tailwind-merge';
// import Header from '@/components/Header';
// import SearchInput from '@/components/SearchInput';
// import SearchContent from '@/components/SearchContent';
// import { Button, InputGroup, FormControl, Container, Row, Card } from 'react-bootstrap';

// const CLIENT_ID: string = 'b15596def410467a87e5c58f8a1ce1f8';
// const CLIENT_SECRET: string = '7d50f853b9264ffc8a457f53f2b787e5';

// interface Song {
//   name: string;
//   album: {
//     images: { url: string }[];
//   };
// }

// export const revalidate = 0;

// function App(): JSX.Element {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [accessToken, setAccessToken] = useState<string>("");
//   const [songs, setSongs] = useState<Song[]>([]);

//   useEffect(() => {
//     // API accessToken
//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
//     };

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token));
//   }, []);

//   // SEARCH
//   async function search(): Promise<void> {
//     console.log('Search for ' + searchInput);

//     var searchParameters = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };

//     var artistID = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, searchParameters)
//       .then(response => response.json())
//       .then(data => data.artists.items[0]?.id);

//     if (artistID) {
//       var returnedSongs = await fetch(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US`, searchParameters)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setSongs(data.tracks || []);
//         });
//     }
//   }

//   return (
//     <div className={twMerge(`h-full bg-gradient-to-b from-yellow-800 `)}>
//       <div className={twMerge(`bg-yellow-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto`)}>
//         <Header className={twMerge(`from-bg-neutral-900`)}>
//           <div className={twMerge(`mb-4 flex flex-col gap-y-6`)}>
//             <h1 className={twMerge(`text-white text-3xl font-semibold`)}>Search</h1>
//             <div className={twMerge(`flex items-center`)}>
//               <InputGroup className={twMerge(`mb-2 w-full`)} size="lg">
//                 <FormControl
//                   placeholder="What do you want to listen to?"
//                   type="input"
//                   onKeyPress={(event) => {
//                     if (event.key === 'Enter') {
//                       search();
//                     }
//                   }}
//                   onChange={(event) => setSearchInput(event.target.value)}
//                   className={twMerge(`bg-gray-200 text-gray-800 rounded-lg w-full py-2`)}
//                 />
//               </InputGroup>
//               <Button
//                 onClick={search}
//                 className={twMerge(`
//                   rounded-none
//                   bg-orange-500
//                   border
//                   border-transparent
//                   px-3
//                   py-2
//                   disabled:cursor-not-allowed
//                   disabled:opacity-50
//                   text-white
//                   font-bold
//                   hover:opacity-75
//                   transition
//                 `)}
//               >
//                 Search
//               </Button>
//             </div>
//           </div>
//         </Header>
//         <SearchContent songs={songs} />
//         {/* <Container>
//           <Row className={twMerge(`mx-2 row row-cols-4`)}>
//             {songs.map((song, i) => (
//               <Card key={i} className={twMerge(`mb-3`)}>
//                 <Card.Img src={song.album.images[0]?.url} />
//                 <Card.Body>
//                   <Card.Title>{song.name}</Card.Title>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Row>
//         </Container> */}
//       </div>
//     </div>
//   );
// }

// export default App;


"use client"
import { Song } from "@/types";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "@/components/SearchContent";
import { Button, InputGroup, FormControl, Container, Row, Card } from "react-bootstrap";
import useOnPlay from "@/hooks/useOnPlay";

import { corsHeaders } from '@/cors';



const CLIENT_ID: string = 'b15596def410467a87e5c58f8a1ce1f8';
const CLIENT_SECRET: string = '7d50f853b9264ffc8a457f53f2b787e5';


export const revalidate = 0;

// function App(): JSX.Element {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [accessToken, setAccessToken] = useState<string>("");
//   const [songs, setSongs] = useState<Song[]>([]);
//   const onPlay = useOnPlay(songs);


//   useEffect(() => {
//     // API accessToken
//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
//     };

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token));
//   }, []);

//   // SEARCH
//   async function search(): Promise<void> {
//     console.log('Search for ' + searchInput);

//     var searchParameters = {
//       method: 'GET',
//       headers: {

//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };
//     var searchResults = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, searchParameters)
//       .then(response => response.json())
//       .then(data => data.tracks.items);

//     if (searchResults.length > 0) {
//       const extractedSongs = searchResults.map((track: any) => ({
//         id: track.id,
//         user_id: "",
//         author: track.artists[0].name,
//         title: track.name,
//         song_path: "",
//         image_path: track.album.images[0]?.url || "https://via.placeholder.com/150",
//       }));
//       setSongs(extractedSongs);
//     }
//   }



// return (
//   <div className={twMerge(`h-full bg-gradient-to-b from-yellow-800 `)}>
//     <div className={twMerge(`bg-yellow-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto`)}>
//       <Header className={twMerge(`from-bg-neutral-900`)}>
//         <div className={twMerge(`mb-4 flex flex-col gap-y-6`)}>
//           <h1 className={twMerge(`text-white text-3xl font-semibold`)}>Search</h1>
//           <div className={twMerge(`flex items-center`)}>
//             <InputGroup className={twMerge(`mb-2 w-full`)} size="lg">
//               <FormControl
//                 placeholder="What do you want to listen to?"
//                 type="input"
//                 onKeyPress={(event) => {
//                   if (event.key === 'Enter') {
//                     search();
//                   }
//                 }}
//                 onChange={(event) => setSearchInput(event.target.value)}
//                 className={twMerge(`bg-gray-200 text-gray-800 rounded-lg w-full py-2`)}
//               />
//             </InputGroup>
//           </div>
//         </div>
//       </Header>
//       <SearchContent songs={songs} onPlay={onPlay} />
//     </div>
//   </div>
// );
// }

// export default App;



// function App(): JSX.Element {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [accessToken, setAccessToken] = useState<string>("");
//   const [songs, setSongs] = useState<Song[]>([]);
//   const onPlay = useOnPlay(songs);

//   useEffect(() => {
//     // API accessToken
//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
//     };

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token));
//   }, []);

//   async function search(): Promise<void> {
//     var searchParameters = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };

//     var searchResults = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, searchParameters)
//       .then(response => response.json())
//       .then(data => data.tracks.items);

//     if (searchResults.length > 0) {
//       const extractedSongs = searchResults.map((track: any) => ({
//         id: track.id,
//         user_id: "",
//         author: track.artists[0].name,
//         title: track.name,
//         song_path: track.preview_url,
//         image_path: track.album.images[0]?.url || "https://via.placeholder.com/150",
//       }));
//       setSongs(extractedSongs);
//     }
//   }

//   return (
//     <div className={twMerge(`h-full bg-gradient-to-b from-yellow-800 `)}>
//       <div className={twMerge(`bg-yellow-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto`)}>
//         <Header className={twMerge(`from-bg-neutral-900`)}>
//           <div className={twMerge(`mb-4 flex flex-col gap-y-6`)}>
//             <h1 className={twMerge(`text-white text-3xl font-semibold`)}>Search</h1>
//             <div className={twMerge(`flex items-center`)}>
//               <InputGroup className={twMerge(`mb-2 w-full`)} size="lg">
//                 <FormControl
//                   placeholder="What do you want to listen to?"
//                   type="input"
//                   onKeyPress={(event) => {
//                     if (event.key === 'Enter') {
//                       search();
//                     }
//                   }}
//                   onChange={(event) => setSearchInput(event.target.value)}
//                   className={twMerge(`bg-gray-200 text-gray-800 rounded-lg w-full py-2`)}
//                 />
//               </InputGroup>
//             </div>
//           </div>
//         </Header>
//         <SearchContent songs={songs} onPlay={onPlay} />
//       </div>
//     </div>
//   );
// }

// export default App;



function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");
  const [songs, setSongs] = useState<Song[]>([]);
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    // API accessToken
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token));
  }, []);

  // async function search(): Promise<void> {
  //   var searchParameters = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + accessToken
  //     }
  //   };

  //   var searchResults = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, searchParameters)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Log the entire response to the console for inspection
  //       console.log('Spotify API Response:', data);

  //       // // Assuming the string value is part of the response, find and log it
  //       // const stringValue = data.someProperty.someNestedProperty.someStringValue; // Replace with the actual path
  //       // console.log('String Value:', stringValue);

  //       // // Now you can convert the string to a bigint
  //       // const bigintValue = BigInt(`0x${Buffer.from(stringValue).toString('hex')}`);
  //       // console.log('BigInt Value:', bigintValue);

  //       const previewUrl = data.tracks.items[0]?.preview_url;


  //       // // Continue with the rest of your logic
  //       return {
  //         previewUrl,
  //         items: data.tracks.items
  //       };
  //     });

  //   if (searchResults.items.length > 0) {
  //     const extractedSongs = searchResults.items.map((track: any) => ({
  //       id: track.id,
  //       user_id: "",
  //       author: track.artists[0].name,
  //       title: track.name,
  //       song_path: searchResults.previewUrl || "",
  //       image_path: track.album.images[0]?.url || "https://via.placeholder.com/150",
  //     }));
  //     setSongs(extractedSongs);
  //   }
  async function search(): Promise<void> {
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    };

    var searchResults = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, searchParameters)
      .then(response => response.json())
      .then(data => {
        // Log the entire response to the console for inspection
        console.log('Spotify API Response:', data);

        // Extracting the preview_url from the first item in the items array
        const previewUrl = data.tracks.items[0]?.preview_url;

        console.log('Preview URL:', previewUrl);

        // Continue with the rest of your logic
        return {
          previewUrl,
          items: data.tracks.items
        };
      });

    if (searchResults.items.length > 0) {
      const extractedSongs = searchResults.items.map((track: any) => {
        const song = {
          id: track.id,
          user_id: "",
          author: track.artists[0].name,
          title: track.name,
          song_path: track.previewUrl || "", // Use the extracted previewUrl here
          image_path: track.album.images[0]?.url || "https://via.placeholder.com/150",
        };

        console.log('Extracted Song:', song);

        return song;
      });

      setSongs(extractedSongs);
    }
  }


  return (
    <div className={twMerge(`h-full bg-gradient-to-b from-yellow-800 `)}>
      <div className={twMerge(`bg-yellow-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto`)}>
        <Header className={twMerge(`from-bg-neutral-900`)}>
          <div className={twMerge(`mb-4 flex flex-col gap-y-6`)}>
            <h1 className={twMerge(`text-white text-3xl font-semibold`)}>Search</h1>
            <div className={twMerge(`flex items-center`)}>
              <InputGroup className={twMerge(`mb-2 w-full`)} size="lg">
                <FormControl
                  placeholder="What do you want to listen to?"
                  type="input"
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      search();
                    }
                  }}
                  onChange={(event) => setSearchInput(event.target.value)}
                  className={twMerge(`bg-gray-200 text-gray-800 rounded-lg w-full py-2`)}
                />
              </InputGroup>
            </div>
          </div>
        </Header>
        <SearchContent songs={songs} onPlay={onPlay} />
      </div>
    </div>
  );
}

export default App;
