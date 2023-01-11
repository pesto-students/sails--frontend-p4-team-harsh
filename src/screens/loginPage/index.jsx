// import profile from "./login images/ user logo.png";
// import background from "./login images/logo.jpeg";
// import password from "./login images/passwordlogo.png";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="image">
            {/* <div className="image-container">
              <img src={background} alt="profile image" className="profile" />
            </div> */}
          </div>
          <div>
            <h1 className="loginclass">LOGIN HERE</h1>
            <div>
              {/* <img src={profile} alt="username" className="userimage" /> */}
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className="second-input">
              {/* <img src={password} alt="Username" className="passwordimage" /> */}
              <input
                type="password"
                placeholder="***********"
                className="name"
              />
            </div>
            <div className="buttonclass">
              <button className="button">Login</button>
            </div>
          </div>
          <div className="forgotpassword">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
