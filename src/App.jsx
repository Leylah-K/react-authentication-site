import './App.css'
import {useState} from 'react';

function App() {
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("login");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Practise form- no real sign in");
  }
  function handleSignupSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("signup-password");
    const confirmPassword = formData.get("confirm-password");
    if(password !== confirmPassword){
      setMessage("Passwords do not match")
      return
    }
    setMessage("Practise form - no real account created")
  }
  return (
    <main>
      <h1>{mode === "login" ? "Sign-in" : "Create Account"}</h1>
      <form onSubmit={handleSubmit} hidden={mode !== "login"}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <button type="submit">Sign in</button>
      </form>
      <p>{message}</p>
      <button type="button" onClick={() => setMode("signup")}>Sign-up</button>

      <form onSubmit={handleSignupSubmit} hidden={mode !== "signup"}>
        <label htmlFor="signup-email">Email</label>
        <input type="email" id="signup-email" required/>
        <label htmlFor="signup-password">Password</label>
        <input type="password"  name="signup-password" id="signup-password" required/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" required/>
        <button type="submit">Create Account</button>
        <button type="button" onClick={()=> setMode("login")}>Already have an account?</button>
      </form>
    </main>
  )
}

export default App
