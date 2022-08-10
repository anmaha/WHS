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
          value={credentials.lastName}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="LastName"
          placeholder="Last Name..."
          value={credentials.lastName}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="User Name..."
          value={credentials.userName}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email..."
          value={credentials.email}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={credentials.password}
          onChange={handleOnChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
