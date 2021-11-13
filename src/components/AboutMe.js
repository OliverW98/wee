import { useSpring, animated } from "react-spring";

function AboutMe() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <animated.div className="box" style={props}>
      <h1>Hello! Welcome</h1>
      <p>
        My name is Ollie, I’m a new Computing graduate from the university of
        Plymouth.
      </p>
      <p>
        Over my time at university i built numerous coursework projects and some
        personal passion projects including this webiste. I am familiar with the
        following languages : JavaScript, React, SQL, PHP, C#, Java.
      </p>
    </animated.div>
  );
}
export default AboutMe;
