import "./App.css";
import { useState, useEffect, createContext, useContext } from "react";
import { signInWithGoogle, auth } from "./Firebase";
import {NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Upload from "./Upload";



function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        // session try
        var string1 = JSON.stringify(authUser);
        var usersession = JSON.parse(string1);  
        console.log(usersession.displayName);
        //session try end
      } else {
        setUser(null);
        localStorage.clear();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <div className="App">

      {!user ? (
        
          <button class="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
          </button>

        ) : (<>
      
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Upload />} />        
              </Route>
            </Routes>
          {/* <button onClick={() => auth.signOut()} >Sign out</button>   */}
          </Router>
    

          </>
        )}

    </div>
  );
}



const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      {/* <Component2 user={user} /> */}
    </UserContext.Provider>
  );
}


export default App;
