import React, { useState, useEffect } from "react";
import { loginWithToken, logoutUser } from "../../redux/userState";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";

function Homepage() {
  const [tokenPayload, setTokenPayload] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.userState);
  const [isLoading, setIsLoading] = useState(true);
  
  const callLogoutUser = () => {
    dispatch(logoutUser(tokenPayload));
  };

  useEffect(() => {
    let authToken = localStorage.getItem("auth_token");
    if (authToken) {
      let tempTokenPayload = {
        headers: {
          authorization: authToken,
        },
      };
      setTokenPayload(tempTokenPayload);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const callLoginWithToken = () => {
      dispatch(loginWithToken(tokenPayload));
    };    
    
    if (tokenPayload && Object.keys(tokenPayload).length > 0) {
      callLoginWithToken();
    }
  }, [tokenPayload]);

  useEffect(() => {
    if (user?.email) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : user && !isLoading ? (
        <div>
          <h1>Logged in as {user.email}</h1>
          <button style={{ color: "red" }} onClick={callLogoutUser}>
            Log out
          </button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default Homepage;
