import { Outlet, Link } from "react-router-dom";
import { auth } from './Firebase'
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Upload</Link>
          </li>
          {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li>*/}
        </ul> 
      </nav>
      
    <button onClick={() => auth.signOut()} >Sign out</button> 
        <div className="user-info">
            <p>{localStorage.getItem("name")}</p>
          <p>{localStorage.getItem("email")}</p>
          <img src={localStorage.getItem("profilePic")} width='50px' style={{borderRadius:'50px'}}/>
        </div>
          <br/><br/>
      <Outlet />
    </>
  )
};

export default Layout;
