import { TabPanel } from '@wordpress/components';

import ShapeStyle from '../Style/ShapeStyle';
import ShapeType from './ShapeType';

import { shapeStyleTabs } from '../../utils/options';

const CursorShape = ({ csbAvScrData, setCsbAvScrData }) => {
  return (
    <>
      <TabPanel className="bPlTabPanel small mt10" activeClass='activeTab' tabs={shapeStyleTabs}>
        {
          tab => <>
            {tab.name == 'type' && <ShapeType value={csbAvScrData?.shape || {}} onChange={value => setCsbAvScrData({ ...csbAvScrData, shape: value })} />}
            {tab.name == 'style' && <ShapeStyle value={csbAvScrData?.shape || {}} onChange={value => setCsbAvScrData({ ...csbAvScrData, shape: value })} />}
          </>
        }
      </TabPanel>


    </>
  );
};

export default CursorShape;