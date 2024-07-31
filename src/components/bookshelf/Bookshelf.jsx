import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newBook, setNewBook] = useState({ title: '', author: ''})

    const handleInputChange = (event) => {
        setFormData({ ...newBook, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefualt();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' })
    };
      
    return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            {
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />

                    <label>Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />

                    <button type="submit">Add Book</button>
                </form>
            }
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index} className="bookCard">
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Bookshelf;