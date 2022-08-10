import React from "react";

const Logging = ({ credentials, handleOnSubmit, handleOnChange }) => {
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleOnSubmit}>
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

export default Logging;
