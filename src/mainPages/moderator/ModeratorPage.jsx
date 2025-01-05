import "./ModeratorPage.css";
import { useState, useEffect } from "react";

const ModeratorPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (username && password) {
      setIsLoggedIn(true);
    }
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setUsername("");
    setPassword("");
    window.location.reload();
  };

  const finish = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="loginPage">
        <div className="firstWindow">
          <div>
            <h2>Login</h2>
            <div className="labelInput">
              <label>Username</label>
              <input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="labelInput">
              <label>Password</label>
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>

          {isLoggedIn ? (
            <div className="postBackground">
              <div>
                <label>Description of car1</label>
                <textarea rows={5}></textarea>
              </div>
              <div>
                <label>Description of car2</label>
                <textarea rows={5}></textarea>
              </div>
              <div>
                <label>Description of car3</label>
                <textarea rows={5}></textarea>
              </div>
              <div>
                <button>Post</button>
                <button onClick={finish}>Finish</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ModeratorPage;
