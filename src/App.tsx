import React, {useState} from 'react';
import './App.css';
import { BookToRead } from "./types/BookToRead";
import BookRow from "./BookRow";

const dummyBooks: BookToRead[] = [
    {
        id: 1,
        title: "はじめてのReact",
        authors: "ダミ山",
        memo: "dummy"
    },
    {
        id: 2,
        title: "React Hooks入門",
        authors: "ダミ岡",
        memo: "dummy"
    },
    {
        id: 3,
        title: "実践Reactアプリケーション開発",
        authors: "ダミ藤",
        memo: "dummy"
    }
];

const App = () => {
    const [books, setBooks] = useState(dummyBooks);
    const bookRows = books.map((b) => {
        return (
            <BookRow
                book={b}
                key={b.id}
                onMemoChange={(id, memo) => {}}
                onDelete={(id) => handleBookDelete(id)}
            />
        );
    });

    const handleBookDelete = (id: number) => {
        const newBooks = books.filter((b) => b.id !== id);
        setBooks(newBooks);
    };

    return (
        <div className="App">
            <section className="nav">
                <h1>読みたい本リスト</h1>
                <div className="button-like">本を追加</div>
            </section>
            <section className="main">
                {bookRows}
            </section>
        </div>
    );
}

export default App;
