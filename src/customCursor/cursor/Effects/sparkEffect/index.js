import Explosion from "./Explosion/Explosion";
import Radial from "./Radial/Radial";
// import SparkSimple from "./SparkSimple/SparkSimple";
import Starburst from "./Starburst/Starburst";

const SparkEffect = ({ effect }) => {
  switch (effect?.type) {
    // case "spark":
    //   return <ClickSpark sparkColor='#f00' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400} />;
    // case "sparkSimple":
    //   return <SparkSimple {...effect?.sparkSimple} />;
    case "starburst":
      return <Starburst {...effect?.starburst} />;
    case "radial":
      return <Radial {...effect?.radial} />;
    case "explosion":
      return <Explosion {...effect?.explosion} />;
  }
}


export default SparkEffect;