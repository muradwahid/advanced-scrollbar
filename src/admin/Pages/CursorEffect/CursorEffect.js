import { useState } from 'react';
import Layout from '../../Layout/Layout';
import Playground from './Playground/Playground';
import Settings from './Settings/Settings';
import './style.scss';
import ProModal from '../../../components/ProModal';
const CursorEffect = ({ dataInfo, version }) => {
  const { isPremium = false } = dataInfo;
  const [isProModalOpen, setIsProModalOpen] = useState(false)


  return (
    <Layout version={version}>
      <div className='custom-cursor-container'>
        <ProModal isProModalOpen={isProModalOpen} setIsProModalOpen={setIsProModalOpen} />
        <div className='custom-cursor-content-wrapper'>
          <Settings {...{ dataInfo, isProModalOpen, setIsProModalOpen,isPremium }} />
          <Playground dataInfo={dataInfo} />
        </div>
      </div>
    </Layout>
  );
};

export default CursorEffect;