import { glitchCursorDefaultValues } from '../../utils/common';
import BlobCursor from './BlobCursor/BlobCursor';
import CursorDot from './CursorDot/CursorDot';
import CursorElastic from './CursorElastic/CursorElastic';
import CursorFollow from './CursorFollow/CursorFollow';
import CursorGlitch from './CursorGlitch/CursorGlitch';
import CursorGlow from './CursorGlow/CursorGlow';
import CursorGradient from './CursorGradient/CursorGradient';
import CursorImage from './CursorImage/CursorImage';
import CursorMagnetic from './CursorMagnetic/CursorMagnetic';
import CursorNeon from './CursorNeon/CursorNeon';
import CursorPixelated from './CursorPixelated/CursorPixelated';
// import CursorRibbon from './CursorRibbon/CursorRibbon';
import CursorRing from './CursorRing/CursorRing';
import CursorRipple from './CursorRipple/CursorRipple';
import CursorSketch from './CursorSketch/CursorSketch';
import CursorSpotlight from './CursorSpotlight/CursorSpotlight';
import CursorText from './CursorText/CursorText';
import SplashCursor from './SplashCursor/SplashCursor';

const Cursor = ({ shape={}, domEl = null, eventEl = window, rect = {} }) => {
  function getGlitchProps(type, shape) {
    return {
      ...glitchCursorDefaultValues[type],
      ...shape?.[type]
    };
  }

  // console.log(shape);
  switch (shape?.type) {
    case 'follow':
      return <CursorFollow shape={shape.type} {...shape?.follow} domEl={domEl}/>;
    case 'blob':
      return <BlobCursor {...shape.blob} domEl={domEl} eventEl={eventEl} rect={rect} />;
    case 'dot':
      return <CursorDot {...shape.dot} domEl={domEl} />;
    case 'elastic':
      return <CursorElastic {...shape.elastic} domEl={domEl} />;
    case 'digital':
    case 'analog':
    case 'cyberpunk':
    case 'matrix':
      return <CursorGlitch {...getGlitchProps(shape.type, shape)} key={shape.type} domEl={domEl} />;
    case 'glow':
      return <CursorGlow {...shape?.glow} domEl={domEl} />;
    case 'gradient':
      return <CursorGradient {...shape?.gradient} domEl={domEl} />;
    case 'image':
      return <CursorImage {...shape?.image} url={shape?.image?.img?.url} domEl={domEl} />;
    case 'magnetic':
      return <CursorMagnetic {...shape?.magnetic} domEl={domEl} />;
    case 'neon':
      return <CursorNeon {...shape?.neon} domEl={domEl} />;
    case 'pixelated':
      return <CursorPixelated {...shape?.pixelated} domEl={domEl} />;
    // case 'ribbon':
    //   return <CursorRibbon baseThickness={30}
    //     colors={['#DA6C6C', '#FE5D26']}
    //     speedMultiplier={0.5}
    //     maxAge={500}
    //     enableFade={false}
    //     enableShaderEffect={true} domEl={domEl} />;
    case 'ring':
      return <CursorRing {...shape?.ring} domEl={domEl} />;
    case 'ripple':
      return <CursorRipple domEl={domEl} eventEl={eventEl} />;
    case 'sketch':
      return <CursorSketch  {...shape?.sketch} domEl={domEl} />;
    case 'spotlight':
      return <CursorSpotlight {...shape?.spotlight} domEl={domEl} />;
    case 'splash':
      return <SplashCursor SPLAT_RADIUS={shape?.splash?.size} key={shape?.splash?.size} domEl={domEl} />;
    case 'text':
      return <CursorText {...shape?.text} domEl={domEl} />;

    default:
      return null;
  }
  // return <BlobCursor />
  // return (
  //   <>
  //     <BlobCursor />
  //     <CursorDot />
  //     <CursorElastic/>
  //     <CursorGlitch />
  //     <CursorGlow/>
  //     <CursorGradient/>
  //     <CursorImage/>
  //     <CursorMagnetic/>
  //     <CursorNeon/>
  //     <CursorFollow/>
  //     <CursorPixelated/>
  //     <CursorRibbon/>
  //     <CursorRing/>
  //     <CursorRipple/>
  //     <CursorSketch/>
  //     <CursorSpotlight/>
  //     <CursorText/>
  //     <SplashCursor/>
  //     <CursorGlitch />
  //   </>
  // );
};

export default Cursor;