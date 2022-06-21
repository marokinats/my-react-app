import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

createRoot(document.getElementById('root')).render(<App title={'I am from props!'} />);
registerServiceWorker();
