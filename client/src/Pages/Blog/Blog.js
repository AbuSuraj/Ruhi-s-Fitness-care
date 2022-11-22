import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useTitle("Blog");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-serif my-5 ">
        Some important interview Qustions
      </h1>
      <div
        data-aos="fade-right"
        className="ml-20 mr-4  border-2 rounded-3xl p-4  shadow-2xl my-8 "
      >
        <h1 className="text-2xl font-bold">
          Q.1 what are the Difference between SQL and NoSQL?
        </h1>
        <div className="  my-2">
          <p className="font-bold mx-2">Answer: </p>
          <ol className="list-decimal mb-2 mx-2 md:mx-4">
            <li>
              {" "}
              <span className="font-bold">SQL</span> databases are primarily
              called as Relational Databases (RDBMS); whereas{" "}
              <span className="font-bold">NoSQL</span> database are primarily
              called as non-relational or distributed database.
            </li>
            <li>
              {" "}
              <span className="font-bold">SQL</span> These databases have fixed
              or static or predefined schema; whereas{" "}
              <span className="font-bold">NoSQL</span> database has dynamic
              schema for unstructured data.
            </li>
            <li>
              {" "}
              <span className="font-bold">SQL</span>databases are not suited for
              hierarchical data storage; whereas{" "}
              <span className="font-bold">NoSQL</span> databases are best suited
              for hierarchical data storage.
            </li>
            <li>
              {" "}
              <span className="font-bold">SQL</span> databases Vertically
              Scalable; whereas <span className="font-bold">NoSQL</span>{" "}
              database Horizontally scalable.
            </li>
            <li>
              {" "}
              <span className="font-bold">SQL</span>Follows ACID property;
              <span className="font-bold">NoSQL</span> database follows
              CAP(consistency, availability, partition tolerance).
            </li>
          </ol>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="ml-20 mr-4 my-8   border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">
          Q.2 What is JWT, and how does it work?
        </h1>
        <div className="block md:flex my-2">
          <p className="font-bold mx-2">Answer: </p>
          <p className="font-medium text-lg">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP).
            <br />
            <span className="font-bold my-6">working procedure:</span>
            <ul className="list-disc mt-2 ml-4 md:ml-8">
              <img src="https://i.ibb.co/sj3CnLw/jwt.png" alt="" />
              <li>
                User sign-in using username and password or google/facebook.
              </li>
              <li>
                Authentication server verifies the credentials and issues a jwt
                signed using either a secret salt or a private key.
              </li>
              <li>
                User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header.
              </li>
              <li>
                Resource server then verifies the authenticity of the token
                using the secret salt/ public key.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up-right"
        className="ml-20 my-8 mr-4 border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">
          Q.3. What is the difference between javascript and NodeJS?
        </h1>
        <div className="block md:flex my-2">
          <p className="font-bold text-lg mx-2">Answer: </p>
          <p className="font-normal text-base md:font-medium md:text-md">
            <div className="overflow-x-auto">
              <table className="table-normal  w-full">
                <thead>
                  <tr>
                    <th>javascript</th>
                    <th>Node</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <td>
                      JS is a programming language that is used for writing
                      scripts on the website
                    </td>
                    <td>NodeJS is a Javascript runtime environment.</td>
                  </tr>

                  <tr className="hover">
                    <td>JS can only be run in the browsers.</td>
                    <td>
                      We can run Javascript outside the browser with the help of
                      NodeJS.
                    </td>
                  </tr>

                  <tr className="hover">
                    <td>
                      It is capable enough to add HTML and play with the DOM
                    </td>
                    <td>It does not have capability to add HTML tags.</td>
                  </tr>
                  <tr className="hover">
                    <td>It is used in frontend development.</td>
                    <td>It is used in server-side development.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up-right"
        className="ml-20 my-8 mr-4  border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">
          Q. 4 How does NodeJS handle multiple requests at the same time?
        </h1>
        <div className="block md:flex my-2">
          <p className="font-bold text-lg mx-2">Answer: </p>
          <p className="font-medium text-lg">
            <span className="font-bold">Node.js</span> is an open-source,
            cross-platform, back-end JavaScript runtime environment that runs on
            a JavaScript Engine and executes JavaScript code outside a web
            browser, which was designed to build scalable network applications
            <br></br>
            <br></br>
            <span className="font-bold">
              Node.js handles multiple requests:
            </span>{" "}
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
