import { TabPanel } from '@wordpress/components';
import { cursorStyleTabs } from '../utils/options';
import General from './options/General';
import Style from './style/Style';

const OptionSettings = (props) => {
  return (
    <>
      <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={cursorStyleTabs}
        // initialTabName='style'
      >
        {
          (tab) => <>
            {tab.name == "cursor" && <General {...props} />}
            {tab.name == "style" && <Style {...props} />}
          </>
        }
      </TabPanel>
    </>
  );
};

export default OptionSettings;