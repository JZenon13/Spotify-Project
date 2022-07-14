import React, { useState, useEffect } from "react";

function Review() {
  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>{"reviews"}</div>;
}

export default Review;
