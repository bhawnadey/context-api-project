import React from "react";
import { useUserContext } from "../context/userContext";

const Header = () => {
  const { user} = useUserContext();
  console.log(user);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>React Context API</h2>
        <div className="profile">
          <h3>Welcome, {user.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
