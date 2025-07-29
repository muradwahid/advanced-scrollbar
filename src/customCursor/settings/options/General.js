import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { cursorEffectTabs } from '../../utils/options';
import CursorShape from './CursorShape';
import CursorEffects from './CursorEffects';

const General = (props) => {
  const { crblData, setCrblData } = props;
  return (
    <TabPanel className='bPlTabPanel mini mt10' activeClass='activeTab' tabs={cursorEffectTabs} onSelect={tabController}
      // initialTabName='effect'
    >
      {
        (tab) => <>
          {tab.name == "shape" && <CursorShape initialOpen={ crblData?.effect?.type !== 'none'?true:false } value={crblData?.shape ||{}} onChange={(val) => setCrblData({ ...crblData, shape: val })} />}
          {tab.name == "effect" && <CursorEffects initialOpen={crblData?.shape?.type !== 'none' ? true : false} value={crblData?.effect || {}} onChange={(val) => setCrblData({ ...crblData, effect: val })} />}
        </>
      }
    </TabPanel>
  );
};

export default General;