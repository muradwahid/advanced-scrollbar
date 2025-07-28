export const isSet = v => v !== undefined && v !== null && v !== '';

export const generateGradient = (colorObject) => {
  const validColors = Object.values(colorObject).filter(color => color && String(color).trim());

  if (validColors.length >= 2) {
    return `linear-gradient(to top, ${validColors.join(', ')})`;
  } else if (validColors.length === 1) {
    return validColors[0];
  } else {
    return 'transparent';
  }
}

export const getBorderCSS = (border = {}) => {
  // Default values
  const defaults = {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    style: 'solid',
    color: '#000'
  };

  // Merge with defaults
  const finalBorder = { ...defaults, ...border };

  // Extract values
  const { top, right, bottom, left, style, color } = finalBorder;

  // Generate CSS string
  return {
    borderTop: `${top}px ${style} ${color}`,
    borderRight: `${right}px ${style} ${color}`,
    borderBottom: `${bottom}px ${style} ${color}`,
    borderLeft: `${left}px ${style} ${color}`,
    // Shorthand version (if all sides are equal)
  };
}