import Layout from '../../Layout/Layout';
import './style.scss';
import Settings from './Settings/Settings';
import Playground from './Playground/Playground';
const CursorEffect = ({ dataInfo }) => {
  return (
    <Layout>
      <div className='custom-cursor-container'>

        <div className='custom-cursor-content-wrapper'>
          <Settings dataInfo={dataInfo} />
          <Playground dataInfo={dataInfo} />
        </div>
      </div>
    </Layout>
  );
};

export default CursorEffect;