
import { useParams } from 'react-router-dom'
//const { useParams } = require("react-router-dom")

const BooksById=(props)=>{

const {id}=useParams()
const books=props.books
const book=books.find(b=>b.id===parseInt(id))

    return(
        <div>
            <h1>Book Details</h1>
            <h3>Name:{book.name}</h3>
            <p>Author:{book.author}</p>
            <p>Id:{book.id}</p>

        </div>
    )

}
export default BooksById