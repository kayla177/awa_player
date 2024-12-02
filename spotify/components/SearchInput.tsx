"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";
import Button from "./Button"

import Input from "./Input";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500); // Debounced version of the input value

    const [searchInput, setsearchInput] = useState(""); //searchinput is the value of our state, set...is how we change the value of the state

    useEffect(() => {
        const query = { title: debouncedValue, };

        const url = qs.stringifyUrl({
            url: '/search', // Navigate to the search page
            query
        });

        // Navigate to the constructed URL
        router.push(url);
    }, [debouncedValue, router]);

    return (
        <div>
            <Input
                placeholder="What do you want to listen to?"
                value={value}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        console.log("Pressed enter");
                    }
                }}
                onChange={(event) => setsearchInput(event.target.value)}// Update state on change
            />
            <Button onClick={(event) => { console.log("Clicked Button"); }}>
                Search
            </Button>
        </div>
    );
}

export default SearchInput;