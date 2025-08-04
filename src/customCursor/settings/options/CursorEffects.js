import { TabPanel } from '@wordpress/components';
import { cursorEffectsOptions, cursorEffectTabs } from '../../utils/options';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import EffectStyleOptions from '../style/EffectStyleOptions';
import { SelectControlPro } from '../../../../../bpl-tools/ProControls';

const CursorEffects = ({ value, onChange,isPremium,setIsProModalOpen }) => {

  return (
    <>
      <TabPanel className='bPlTabPanel mini mt10' activeClass='activeTab' tabs={cursorEffectTabs} onSelect={tabController}>
      {
        (tab) => <>
          {tab.name == "type" && <SelectControlPro className='mt10' label="Effect Type" labelPosition='edge' value={value?.type} onChange={(val) => onChange({ ...value, type: val })} options={cursorEffectsOptions} proValues={['radial', 'explosion', 'rippleCircle', 'rippleDouble', 'rippleWave', 'ripplePulse']} isPremium={isPremium} setIsProModalOpen={setIsProModalOpen} />}
          {tab.name == "style" && <EffectStyleOptions value={value} onChange={onChange} />}
        </>
      }
      </TabPanel>
    </>
  );
};

export default CursorEffects;