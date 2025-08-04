import { cursorEffectsOptions } from '../../utils/options';
import { SelectControlPro } from '../../../../../../../bpl-tools/ProControls';

const ClickEffectOptions = ({ value, onChange, isPremium, setIsProModalOpen }) => {
  return <>

    <SelectControlPro className='mt10' label="Effect Type" labelPosition='edge' value={value?.type} onChange={(val) => onChange({ ...value, type: val })} options={cursorEffectsOptions} proValues={['radial', 'explosion', 'rippleCircle', 'rippleDouble', 'rippleWave', 'ripplePulse']} isPremium={isPremium} setIsProModalOpen={setIsProModalOpen} />
    </>
};

export default ClickEffectOptions;