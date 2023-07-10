import { useState } from "react";
import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    ///Run your login API functions here :)
    //I will just run an alert to show that the email and password are being captured.
    alert(email + password);
  };
  return (
    <>
      <div className="container">
        <img src={logo} alt="AK CodeWorks Logo" />
        <h2>Manage Your Account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputContainer">
            <p>Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="inputContainer">
            <p>Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="bottomForm">
            <button type="submit">Login</button>
            <div className="links">
              <p>New User?</p>
              <p>Forgot Password?</p>
            </div>
          </div>
        </form>
        <small className="copyright">&copy; 2023 AKCodeworks</small>
      </div>
    </>
  );
}

export default App;
