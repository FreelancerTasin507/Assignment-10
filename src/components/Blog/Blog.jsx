import React from "react";

const Blog = () => {
  return (
    <div className="border-2 mt-32">
      <div className="border-2 border-black">
        <h1>1. Differences between uncontrolled and controlled components</h1>
        <p>ANS: 
          Uncontrolled components refer to the parts or factors that are not
          regulated or managed, while controlled components are those that are
          regulated or managed
        </p>
      </div>
      <div className="border-2 border-black">
        <h1>2. How to validate React props using PropTypes</h1>
        <p>ANS: 
          React PropTypes is a utility that allows you to define the types of
          the props that your component should expect
        </p>
      </div>
      <div className="border-2 border-black">
        <h1>3. Difference between nodejs and express js.</h1>
        <p>ANS: 
          Node.js is a server-side JavaScript runtime environment .Express.js is
          a web application framework for Node.js.{" "}
        </p>
      </div>
      <div className="border-2 border-black">
        <h1>4. What is a custom hook, and why will you create a custom hook?</h1>
        <p>ANS: Custom hook a custom hook is a JavaScript function that allows you to extract reusable logic from components.</p>
      </div>
    </div>
  );
};

export default Blog;
