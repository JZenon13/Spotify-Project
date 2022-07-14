import React from "react";

function Homes({ user }) {
  if (user) {
    return <> </>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Homes;
