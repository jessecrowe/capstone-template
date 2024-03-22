
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/books")
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.log(error))
    },[]);

// columnSpacing={{ xs: 2, sm: 4, md: 6 }}
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {books && books.map((book) => (
                <Grid item xs={2} md={4} key={book._id}>
                    <item>
                        <img src={book.image_url}/>
                        <p>{book.title}</p>
                    </item>
                </Grid>
            ))}
        </Grid>
    );
};

export default Books;
