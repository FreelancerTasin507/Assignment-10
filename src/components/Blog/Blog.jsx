import React from "react";
import ReactToPdf from "react-to-pdf";
import Footer from "../Footer/Footer";

const Blog = () => {
  const ref = React.createRef();

  return (
    <>
      <div className="border-2 mt-32 md:mx-40 file">
        <div>
          <div style={{width: 1000}} ref={ref}>
            <div className="border-2 border-black">
              <h1>
                1. Differences between uncontrolled and controlled components
              </h1>
              <p>
                ANS: Uncontrolled components refer to the parts or factors that
                are not regulated or managed, while controlled components are
                those that are regulated or managed
              </p>
            </div>
            <div className="border-2 border-black">
              <h1>2. How to validate React props using PropTypes</h1>
              <p>
                ANS: React PropTypes is a utility that allows you to define the
                types of the props that your component should expect
              </p>
            </div>
            <div className="border-2 border-black">
              <h1>3. Difference between nodejs and express js.</h1>
              <p>
                ANS: Node.js is a server-side JavaScript runtime environment
                .Express.js is a web application framework for Node.js.{" "}
              </p>
            </div>
            <div className="border-2 border-black">
              <h1>
                4. What is a custom hook, and why will you create a custom hook?
              </h1>
              <p>
                ANS: Custom hook a custom hook is a JavaScript function that
                allows you to extract reusable logic from components.
              </p>
            </div>
          </div>
        </div>

        <ReactToPdf className="to-blue-600" targetRef={ref} filename="blog.pdf" >
          {({ toPdf }) => (
            <button className="btn mt-10" onClick={toPdf}>
              Download PDF
            </button>
          )}
        </ReactToPdf>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
