import {useState, useEffect} from "react";
import {BookDescription} from "./types/BookDescription";
import {createBookSearchUrl, extractBooks} from "./functions/BookAPI";

export const useBookData = (title: string, author: string, maxResults: number) => {
    const [books, setBooks] = useState([] as BookDescription[]);

    useEffect(() => {
        if (title || author) {
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
    }, [title, author, maxResults]);

    return books;
}
