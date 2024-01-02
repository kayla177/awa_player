"use client"
import { Song } from "@/types";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "@/components/SearchContent";
import { Button, InputGroup, FormControl, Container, Row, Card } from "react-bootstrap";
import useOnPlay2 from "@/hooks/useOnPlay2";

import { corsHeaders } from '@/cors';



const CLIENT_ID: string = 'b15596def410467a87e5c58f8a1ce1f8';
const CLIENT_SECRET: string = '7d50f853b9264ffc8a457f53f2b787e5';


export const revalidate = 0;

function App(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");
  const [songs, setSongs] = useState<Song[]>([]);
  const onPlay = useOnPlay2(songs);

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

        // console.log('Spotify API Response:', data);
        const previewUrl = data.tracks.items[0]?.preview_url;

        // console.log('Preview URL:', previewUrl);
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
          song_path: track.previewUrl || "",
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
