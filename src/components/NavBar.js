function NavBar({login,loginFunction}){
    return(
        <nav className="Navbar">
            <h1>Chat-App</h1>
            {!login ? <button className="signin" onClick={() => loginFunction("login")}>Sign in</button>:<button onClick={() => loginFunction("logout")} className="signout">Sign out</button>}
            
        </nav>
    );
}

export default NavBar;