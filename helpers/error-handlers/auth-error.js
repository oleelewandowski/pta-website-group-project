import React from "react";

const AuthError = (error) => {
  return (
    <div>
      An Error occured: {error ? error : "Please, try to refresh the Page"}
    </div>
  );
};

export default AuthError;
