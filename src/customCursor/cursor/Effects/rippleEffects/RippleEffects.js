import { isSet } from '../../../utils/common';
// import './style.scss';
/**
 * RippleEffects component renders different ripple effects based on the type prop.
 * @param {Object} props - Component properties.
 * @param {string} props.type - Type of ripple effect ('circle', 'double', 'wave', 'pulse').
 * @returns {JSX.Element} The ripple effect element.
 */
const RippleEffects = ({ type, ...props }) => {
  const { duration, size, background, secondaryBgColor, borderColor, secondaryBorderColor, tertiaryBorderColor, borderWidth } = props;

  const rippleStyle = {
    rippleCircle: {
      ...(isSet(size)) && { '--bPl-cursor-effect-ripple-size': size + 'px' },
      ...(isSet(background)) && { '--bPl-cursor-effect-ripple-background': background },
      ...(isSet(borderColor)) && { '--bPl-cursor-effect-ripple-border-color': borderColor },
      ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
      ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-duration': duration + 's' }
    },
    rippleDouble: {
      fast: {
        ...(isSet(size)) && { '--bPl-cursor-effect-ripple-size': size + 'px' },
        ...(isSet(background)) && { '--bPl-cursor-effect-ripple-background': background },
        ...(isSet(borderColor)) && { '--bPl-cursor-effect-ripple-border-color': borderColor },
        ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
        ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-duration': duration + 's' }
      },
      slow: {
        ...(isSet(size)) && { '--bPl-cursor-effect-ripple-size': size + 'px' },
        ...(isSet(secondaryBgColor)) && { '--bPl-cursor-effect-ripple-background': secondaryBgColor },
        ...(isSet(secondaryBorderColor)) && { '--bPl-cursor-effect-ripple-border-color': secondaryBorderColor },
        ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
        ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-slow-duration': (duration * 1.41).toFixed(2) + 's' }
      }
    },
    rippleWave: {
      wave1: {
        ...(isSet(size)) && { '--bPl-cursor-effect-ripple-wave-size': size + 'px' },
        ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-duration': duration + 's' },
        ...(isSet(borderColor)) && { '--bPl-cursor-effect-ripple-border-color': borderColor },
        ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
      },
      wave2: {
        ...(isSet(size)) && { '--bPl-cursor-effect-ripple-wave-size': size + 'px' },
        ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-duration': duration + 's' },
        ...(isSet(secondaryBorderColor)) && { '--bPl-cursor-effect-ripple-border-color': secondaryBorderColor },
        ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
      },
      wave3: {
        ...(isSet(size)) && { '--bPl-cursor-effect-ripple-wave-size': size + 'px' },
        ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-duration': duration + 's' },
        ...(isSet(tertiaryBorderColor)) && { '--bPl-cursor-effect-ripple-border-color': tertiaryBorderColor },
        ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
      }
    },
    ripplePulse: {
      ...(isSet(size)) && { '--bPl-cursor-effect-ripple-size': size + 'px' },
      ...(isSet(background)) && { '--bPl-cursor-effect-ripple-background': background },
      ...(isSet(duration)) && { '--bPl-cursor-effect-ripple-duration': duration + 's' },
      ...(isSet(borderWidth)) && { '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px' },
      ...(isSet(borderColor)) && { '--bPl-cursor-effect-ripple-border-color': borderColor },
    }
  }

  switch (type) {
    case 'rippleCircle':
      return <div style={rippleStyle.rippleCircle} className="ripple-circle" />;
    case "rippleDouble":
      return (
        <>
          <div style={rippleStyle.rippleDouble.fast} className="ripple-circle ripple-fast" />
          <div style={rippleStyle.rippleDouble.slow} className="ripple-circle ripple-slow" />
        </>
      );
    case "rippleWave":
      return (
        <>
          <div style={rippleStyle.rippleWave.wave1} className="ripple-wave wave-1" />
          <div style={rippleStyle.rippleWave.wave2} className="ripple-wave wave-2" />
          <div style={rippleStyle.rippleWave.wave3} className="ripple-wave wave-3" />
        </>
      );
    case "tsunami":
      return <>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="ripple"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </>
    case 'ripplePulse':
      return <div style={rippleStyle.ripplePulse} className="ripple-pulse" />;
  }
};

export default RippleEffects;