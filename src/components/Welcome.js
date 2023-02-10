import logo from './logo.svg';
function Welcome({loginFunction}){
    return(
        <div className="Welcome">
            <h2>Welcome to React based Chat App</h2>
            <img src={logo} className="App-logo" alt="logo" width="200px" height="200px"/>
            <p>Sign in with google to chat with fellow react developers</p>
            <button className='signin' onClick={() => loginFunction("login")}>Sign in</button>
        </div>
    );
}

export default Welcome;