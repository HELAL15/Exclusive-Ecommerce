

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <ToastContainer/>
        <App />
    </Router>
  </Provider>
);
