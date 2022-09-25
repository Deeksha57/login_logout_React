import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (true) {
      localStorage.setItem("authenticated", true);
      navigate("/login");
    }
  };
  if (!authenticated) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return (
      <div style={{background: "linear-gradient(#e66465,#9198e5)", display:"flex",alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <form onSubmit={handleSubmit} >
        <h1>Welcome to your Dashboard  </h1>
        <br/>
	      <button type="submit" value="Submit" style={{alignItems:'center',justifyContent:'center',display:"flex", width:'80px',padding:'5px',backgroundColor:'#0275d8',border:'none',borderRadius:'5px',marginLeft:'140px'}} >
          Logout
          </button>
	      	  </form>
      </div>
    );
  }
};
export default Dashboard;