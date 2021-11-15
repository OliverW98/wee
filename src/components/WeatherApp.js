import { useSpring, animated } from "react-spring";
import HeroSection from "./HeroSection";
function WeatherApp() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const style = {
    "border-radius": "1rem",
    "margin-bottom": "40px",
    "box-shadow": "0 5px 10px 0 rgba(0,0,0,.1)",
  };

  return (
    <animated.div style={props}>
      <HeroSection
        title="WeahetrApp"
        subtitle="An App i created to display weather data from ann API call."
      />
      <a href="https://olliesapp.netlify.app">
        <img src="/WeatherApp.jpg" alt="weatherApp" style={style} />
      </a>
    </animated.div>
  );
}
export default WeatherApp;
