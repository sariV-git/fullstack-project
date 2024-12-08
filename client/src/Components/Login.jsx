
import { useContext, useRef } from "react"
import ContextName from "./ContextName"

const Login=()=>{

const inputName=useRef(null)
const inputPassword=useRef(null)
const setName=useContext(ContextName)

const handleSubmit=(e)=>{
    e.preventDefault();
    const name=inputName.current.value;
    setName(name)

}

    return(
        <>
        <form onSubmit={handleSubmit}>
           <input ref={inputPassword}
           type="password"
           placeholder="Password"
           />
            <input ref={inputName}
           type="text"
           placeholder="Name"
           />
           <button type="submit">submit</button>


        </form>
        </>
    )
}
export default Login