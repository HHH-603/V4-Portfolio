import * as React from "react";
import "../styles/main.scss";

var greeting = () => {
  let today = new Date();
  let hoursNow = today.getHours();

  if (hoursNow > 18) {
    return "Good evening!";
  } else if (hoursNow > 12) {
    return "Good afternoon!";
  } else if (hoursNow > 0) {
    return "Good morning!";
  } else {
    return "Wow! Thank you for visiting so late at night!";
  }
};

const IndexPage = () => {
  return (
    <>
      <body>
        <h1>Hank Holmes</h1>
        <h2>QA Analyst @ Paymentus</h2>
        <p>
          {greeting()} I'm a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Software_as_a_service"
            target="_blank"
          >
            SaaS
          </a>{" "}
          professional with 5+ years of quality assurance and sales experience,
          working with clients of all shapes & sizes across the USA.
        </p>
        <p>
          This is my personal, non-work portfolio that I'm using to record my
          continuing Full Stack Web Development education. If you're interested
          in connecting, please shoot me an{" "}
          <a href="mailto:github.unlocking468@passmail.net">email</a> or message
          me on{" "}
          <a
            href="https://www.linkedin.com/in/henryhamiltonholmes/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          and I'll be in touch!
        </p>
        <ul>
          <li>Email: github.unlocking468@passmail.net</li>
          <li>LinkedIn: https://www.linkedin.com/in/henryhamiltonholmes/</li>
        </ul>
      </body>
    </>
  );
};

export const Head = () => {
  <title>Hank Holmes</title>;
};

export default IndexPage;
