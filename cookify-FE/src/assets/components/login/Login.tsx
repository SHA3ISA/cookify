import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState<string>("chef");
  const [userID, setUserID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMesage] = useState<string>("");
  const navigete = useNavigate()

  const handleLogin = async () => {
    try {
      let result;
      if (userType == "chef")
        result = await axios.put(`${import.meta.env.VITE_BE}/login/ischef`, {
          chefID:userID,
          password,
        });
      else
        result = await axios.put(`${import.meta.env.VITE_BE}/login/isuser`, {
          userID,
          password,
        });
navigete(`/${userType}/${userID}`)

    } catch (error) {setMesage("invalid credentials")}
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <div className="alert alert-danger">{message}</div>
          <h2 className="card-title text-center mb-4">Login</h2>
          <div className="mb-3">
            <label className="form-label">User Type</label>
            <select
              className="form-select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="chef">chef</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">userID</label>
            <input
              type="text"
              className="form-control"
              placeholder="userID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
          <button className="btn mt-3 btn-light w-100" onClick={()=>navigete("/register")}>
            Create new Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
