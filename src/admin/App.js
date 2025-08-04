import { Toaster } from 'react-hot-toast';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import BPLSettings from '../settings/BPLSettings';
import Layout from './Layout/Layout';
import CursorEffect from './Pages/CursorEffect/CursorEffect';
import Welcome from './Pages/Welcome';
import PopularPlugin from './Pages/PopularPlugin';

const App = ({ options, dataInfo }) => {

  const { version = "", isPremium = false } = dataInfo;
  return (
    <HashRouter>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/welcome" element={<Welcome version={version} />} />
        <Route path="/popularPlugin" element={<PopularPlugin dataInfo={dataInfo} version={version} />} />
        <Route path="/settings" element={<Layout version={version}><div style={{ width: "70%", margin: "0 auto" }}><BPLSettings isPremium={isPremium} options={options} /></div></Layout>} />
        <Route path="/custom-cursor" element={<CursorEffect dataInfo={dataInfo} version={version} />} />
        {/* When no routes match, it will redirect to this route path. Note that it should be registered above. */}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App;