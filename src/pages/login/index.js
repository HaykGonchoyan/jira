import { useState } from "react"

const Login = () => {


    const [count, setCount] =  useState(0)

    const handleInctrementCount = () => {
        setCount((prevState) =>{
            console.log(prevState);
            return prevState +1
        })
        setCount((prevState) =>{
            console.log(prevState);
            return prevState +1
        })
        
        setCount((prevState) =>{
            console.log(prevState);
            return prevState +1
        })
        setCount((prevState) =>{
            console.log(prevState);
            return prevState +1
        })
    
    }
    return(
        <div>
            <button onClick={handleInctrementCount}>{count}</button>
        </div>
    )
} 
export default Login