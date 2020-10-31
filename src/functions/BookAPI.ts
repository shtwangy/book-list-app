import {BookDescription} from "../types/BookDescription";

/**
 * Create Book Search URL
 * @param {string} title
 * @param {string} author
 * @param {number} maxResults
 * @returns {string} Book Search URL
 */
export const createBookSearchUrl = (title: string, author: string, maxResults: number): string => {
    let url = "https://www.googleapis.com/books/v1/volumes?q=";
    const conditions: string[] = [];
    if (title) {
        conditions.push(`intitle:${title}`);
    }
    if (author) {
        conditions.push(`inauthor:${author}`);
    }
    return url + conditions.join('+') + `&maxResults=${maxResults}`;
}

/**
 * Extract the book information from book search API.
 * @param {json} Response to the Google Book API (JSON)
 * @returns {BookDescription[]} Books info array extract by BookDescription type.
 */
export const extractBooks = (json: any): BookDescription[] => {
    const items: any[] = json.items;
    return items.map((item: any) => {
        const volumeInfo: any = item.volumeInfo;
        return {
            title: volumeInfo.title,
            authors: volumeInfo.authors ? volumeInfo.authors.join(', ') : "",
            thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : "",
        }
    });
}
