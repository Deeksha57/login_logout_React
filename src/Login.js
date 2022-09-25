import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "root", password: "root123" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  return (
    <div style={{background: "linear-gradient(#e66465,#9198e5)", display:"flex",alignItems:'center',justifyContent:'center',height:'100vh'}}>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br/>
	      <input
	        type="text"
	        name="Username"
          placeholder="Enter username"
	        value={username}
	        onChange={(e) => setusername(e.target.value)}
          style={{padding:'6px',borderRadius:'5px'}}
	      />
        <br/>
        <br/>
        <label>Password</label>
        <br/>
	      <input
	        type="password"
	        name="Password"
          placeholder="Enter password"
	        onChange={(e) => setpassword(e.target.value)}
          style={{padding:'6px',borderRadius:'5px'}}
	      />
        <br/>
        <br/>
	      <input type="submit" value="Submit"  style={{width:'80px',padding:'5px',backgroundColor:'#0275d8',border:'none',borderRadius:'5px',marginLeft:'30px'}}/>
	  </form>
    </div>
  );
};

export default Login;