import {useState, useEffect} from "react";
import {BookDescription} from "./types/BookDescription";
import {createBookSearchUrl, extractBooks} from "./functions/BookAPI";

export const useBookData = (title: string, author: string, maxResults: number) => {
    const [books, setBooks] = useState([] as BookDescription[]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (isSearching) {
            const url = createBookSearchUrl(
                title,
                author,
                maxResults
            );
            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    return extractBooks(json);
                })
                .then((books) => {
                    setBooks(books);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        setIsSearching(false);
    }, [isSearching]);

    return [books, setIsSearching] as const;
}
