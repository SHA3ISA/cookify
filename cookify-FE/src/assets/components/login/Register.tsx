import React, { useState } from "react";
import axios from "axios";


const Register: React.FC = () => {

const [userId,setUSerID] = useState<string>("")
const [password,setPassword] = useState<string>("")
const [userType,setType] = useState<string>('user')
  
  const handleSubmit = async () => {
    try {
        if(userType=='user')
      await axios.post(`http://localhost:8080/api/v1/login/user`, {userID:userId,password:password});
    else{
        await axios.post(`http://localhost:8080/api/v1/login/chef`, {chefID:userId,password:password});

    }
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed.");
    }
  };

  return (
    <div  className="max-w-sm mx-auto p-4 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="userId">User ID</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={(e)=>{setUSerID(e.target.value)}}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="userType">User Type</label>
        <select
          id="userType"
          name="userType"
          value={userType}
          onChange={(e)=>{setType(e.target.value)}}
          className="w-full p-2 border rounded"
        >
          <option value="user">User</option>
          <option value="chef">Chef</option>
        </select>
      </div>
      <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Register
      </button>
    </div>
  );
};

export default Register;
