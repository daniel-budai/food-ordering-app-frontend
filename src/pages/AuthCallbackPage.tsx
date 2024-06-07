import { useCreateMyUser } from "@api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";

const hasCreatedUser = useRef(false);

const authCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    if (user?.sub && user.email && !hasCreatedUser.current) {
      createUser({ Auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <>Loading...</>;
};

export default authCallbackPage;
