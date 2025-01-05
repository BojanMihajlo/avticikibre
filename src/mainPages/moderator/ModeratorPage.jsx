import "./ModeratorPage.css";

const ModeratorPage = () => {
  return (
    <>
      <div className="loginPage">
        <div className="firstWindow">
          <div>
            <h2>Login</h2>
            <div className="labelInput">
              <label>Username</label>
              <input placeholder="username"></input>
            </div>
            <div className="labelInput">
              <label>Password</label>
              <input placeholder="password"></input>
            </div>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeratorPage;
