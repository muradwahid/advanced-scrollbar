import { useRef } from "react";
import "./CursorEffect.scss";
import { useClickPosition } from "../../hooks/useClickPosition";
import { useAnimationResetOnChange } from "../../hooks/useAnimationResetOnChange";
import RippleEffects from "./rippleEffects/RippleEffects";
import ClickSpark from "./sparkEffect/ClickSpark/ClickSpark";
import SparkEffect from "./sparkEffect"
import SparkSimple from "./sparkEffect/SparkSimple/SparkSimple";


const CursorEffects = ({ effect,domEl=document }) => {
  const effectRef = useRef(null);
  const clickPosition = useClickPosition(domEl);
  useAnimationResetOnChange(effectRef, clickPosition, "effect-wrapper");


  return (
    <>
      {effect?.type !== "spark" && <div
        ref={effectRef}
        // className="effect-wrapper"
        style={{
          left: `${clickPosition.x}px`,
          top: `${clickPosition.y}px`,
          pointerEvents: "none"
        }}
      >
        {(() => {
          switch (effect?.type) {
            case "rippleCircle":
            case "rippleDouble":
            case "rippleWave":
            case "ripplePulse":
            case "tsunami":
              return <RippleEffects type={effect?.type} {...effect?.[effect?.type]} key={effect?.type} />;
            // case "spark":
            case "sparkSimple": return <SparkSimple {...effect?.sparkSimple} />;
            case "starburst":
            case "radial":
            case "explosion":
              return <SparkEffect effect={effect} key={effect?.type} />


            default:
              return null;
          }
        })()}
        {/* <ClickSpark sparkColor='#f00' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}> </ClickSpark> */}
        {/* <SparkSimple/> */}
        {/* <Starburst/> */}
        {/* <Radial/> */}
        {/* <Explosion/> */}
        {/* <RippleEffects type="circle" /> */}
      </div>}

      {effect?.type === "spark" && <ClickSpark {...effect?.spark} domEl={domEl} /> }
    </>
  );
};

export default CursorEffects;
