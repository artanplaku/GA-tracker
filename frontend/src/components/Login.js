import React from 'react'
import { useState } from "react";


const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      {/* onSubmit={handleLogin} */}
      <form>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login