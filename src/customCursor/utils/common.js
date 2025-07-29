export const glitchCursorDefaultValues = {
  digital: {
    glitchMode: "digital",
    intensity: "high",
    speed: "fast",
    blendMode: "multiply",
    size: 20,
    primaryColor: "#ff4040",
    secondaryColor: "#40ff40",
    tertiaryColor: "#4040ff"
  },
  analog: {
    glitchMode: "analog",
    intensity: "medium",
    speed: "slow",
    blendMode: "normal",
    size: 35,
    primaryColor: "#ffffff",
    secondaryColor: "#ff4444",
    tertiaryColor: "#4444ff"
  },
  cyberpunk: {
    glitchMode: "cyberpunk",
    intensity: "medium",
    speed: "medium",
    size: 30,
    primaryColor: "#ff0080",
    secondaryColor: "#00ffff",
    tertiaryColor: "#ff0000"
  },
  matrix: {
    glitchMode: "matrix",
    intensity: "high",
    speed: "fast",
    size: 25,
    primaryColor: "#00ff00",
    secondaryColor: "#40ff40",
    tertiaryColor: "#80ff80"
  }
};

export const isSet = v => v !== undefined && v !== null && v !== '';