import React, { useState } from 'react';
import supabase  from '../supabase';

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSignin = async (e) => {
        e.preventDefault()
        if ( 
            email && email !== "" && password && password !== ""
        ){
            const {error} = await supabase.auth.signIn({email})
        } else{
            setMessage("Invalid email or password")
        } 
    }

  return (
    <div>
        {message && message}
        <h1>Signin</h1>
        <form onSubmit ={handleSignin}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type={"submit"}>Sign In</button>
        </form>
    </div>
  )
}

export default Signin;
