import { createRoot } from 'react-dom/client';
import AppContainer from './Index';
import './admin.scss';
import { options } from './options';

document.addEventListener('DOMContentLoaded', () => {
  const adminEl = document.getElementById('csbScrollbarDashboard');
  const dataInfo = JSON.parse(adminEl.dataset.info);
  createRoot(adminEl).render(<AppContainer options={options} dataInfo={dataInfo} />);
});