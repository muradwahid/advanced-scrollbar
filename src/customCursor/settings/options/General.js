import { TabPanel, ToggleControl } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { cursorShapeTabs } from '../../utils/options';
import CursorShape from './CursorShape';
import ShapeStyleOptions from '../style/ShapeStyleOptions';
import { __ } from '@wordpress/i18n';

const General = (props) => {
  const { csbAvScrData, setCsbAvScrData, isPremium } = props;
  const { enableCursor = true } = csbAvScrData || {};
  return (
    <TabPanel className='bPlTabPanel mini mt10' activeClass='activeTab' tabs={cursorShapeTabs} onSelect={tabController}
      // initialTabName='effect'
    >
      {
        (tab) => <>
          {tab.name == "shape" && <>
          <ToggleControl className="mt10" defaultValue={true} label={__("Enable Default Cursor", "advanced-scrollbar")} checked={enableCursor} onChange={value => setCsbAvScrData({ ...csbAvScrData, enableCursor: value })} />
            <CursorShape value={csbAvScrData?.shape || {}} onChange={(val) => setCsbAvScrData({ ...csbAvScrData, shape: val })} isPremium={isPremium} />
          </>}
          {tab.name == "style" && <ShapeStyleOptions value={csbAvScrData?.shape || {}} onChange={(val) => setCsbAvScrData({ ...csbAvScrData, shape: val })} />}
        </>
      }
    </TabPanel>
  );
};

export default General;