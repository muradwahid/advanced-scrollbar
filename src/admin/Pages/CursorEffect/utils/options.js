import { __ } from '@wordpress/i18n';

export const shapeAndEffectOptions = [
  { name: 'shape', title: __('Cursor Shape', 'b-blocks') },
  { name: 'effect', title: __('Click Effect', 'b-blocks') }
]

export const shapeStyleTabs = [
  { name: 'type', title: __('Shape Type', 'b-blocks') },
  { name: 'style', title: __('Shape Style', 'b-blocks') }
]

export const cursorOptions = [
  { label: __('Default', 'b-blocks'), value: '', default: true },
  { label: __('Follow', 'b-blocks'), value: 'follow' },
  { label: __('Blob', 'b-blocks'), value: 'blob' },
  { label: __('Dot', 'b-blocks'), value: 'dot' },
  { label: __('Elastic', 'b-blocks'), value: 'elastic' },
  { label: __('Glitch Matrix', 'b-blocks'), value: 'matrix' },
  { label: __('Glitch Cyberpunk', 'b-blocks'), value: 'cyberpunk' },
  { label: __('Glitch Analog', 'b-blocks'), value: 'analog' },
  { label: __('Glitch Digital Error', 'b-blocks'), value: 'digital' },
  { label: __('Glow', 'b-blocks'), value: 'glow' },
  { label: __('Gradient', 'b-blocks'), value: 'gradient' },
  { label: __('Image', 'b-blocks'), value: 'image' },
  { label: __('Magnetic', 'b-blocks'), value: 'magnetic' },
  { label: __('Neon', 'b-blocks'), value: 'neon' },
  { label: __('Pixelated', 'b-blocks'), value: 'pixelated' },
  { label: __('Ribbon', 'b-blocks'), value: 'ribbon' },
  { label: __('Ring', 'b-blocks'), value: 'ring' },
  // { label: __('Ripple','b-blocks'), value: 'ripple' },
  { label: __('Sketch', 'b-blocks'), value: 'sketch' },
  { label: __('Spotlight', 'b-blocks'), value: 'spotlight' },
  { label: __('Splash', 'b-blocks'), value: 'splash' },
  { label: __('Text', 'b-blocks'), value: 'text' }
]

export const cursorEffectsOptions = [
  { Label: __('None', 'b-blocks'), value: '', default: true },
  { Label: __('Spark', 'b-blocks'), value: 'spark' },
  { Label: __('Spark Simple', 'b-blocks'), value: 'sparkSimple' },
  { Label: __('Starburst', 'b-blocks'), value: 'starburst' },
  { Label: __('Radial', 'b-blocks'), value: 'radial' },
  { Label: __('Explosion', 'b-blocks'), value: 'explosion' },
  { Label: __('Ripple Circle', 'b-blocks'), value: 'rippleCircle' },
  { Label: __('Ripple Double', 'b-blocks'), value: 'rippleDouble' },
  { Label: __('Ripple Wave', 'b-blocks'), value: 'rippleWave' },
  { Label: __('Ripple Pulse', 'b-blocks'), value: 'ripplePulse' }
  // { Label: __('Ripple Tsunami', 'b-blocks'), value: 'tsunami' },
]