import { useState } from 'react';
import { AboutProModal } from '../../../../../bpl-tools/ProControls';
import Layout from '../../Layout/Layout';
import Playground from './Playground/Playground';
import Settings from './Settings/Settings';
import './style.scss';
const CursorEffect = ({ dataInfo, version }) => {
  const [sProModalOpen, setIsProModalOpen] = useState(false)

  return (
    <Layout version={version}>
      <div className='custom-cursor-container'>
        <AboutProModal isProModalOpen={sProModalOpen} setIsProModalOpen={setIsProModalOpen} />
        <div className='custom-cursor-content-wrapper'>
          <Settings {...{ dataInfo, sProModalOpen, setIsProModalOpen }} />
          <Playground dataInfo={dataInfo} />
        </div>
      </div>
    </Layout>
  );
};

export default CursorEffect;