import { SelectControl } from '@wordpress/components';
import { cursorEffectsOptions } from '../../utils/options';

const ClickEffectOptions = ({value,onChange}) => {
  return <>
      <SelectControl className='mt10' label="Effect Type" labelPosition='edge' value={value?.type} onChange={(val) => onChange({ ...value, type: val })} options={cursorEffectsOptions} />
    </>
};

export default ClickEffectOptions;