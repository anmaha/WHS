import React from "react";

const Signup = ({ credentials, handleOnSubmit, handleOnChange }) => {
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name..."
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="LastName"
          placeholder="Last Name..."
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="User Name..."
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email..."
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={handleOnChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
