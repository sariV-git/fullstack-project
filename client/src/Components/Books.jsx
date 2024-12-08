import {Link,Outlet}from 'react-router-dom'
const Books = (props) => {

    const books = props.books
    
    return (
        <div>
            {books.map(b => {
                return (<div>
                    <h3>name {b.name} </h3>
            <p>author:{b.author}</p>
             <Link to={`/Books/${b.id}`}>more details</Link>
                </div>)

            })}
        </div>
    )
}
export default Books

