

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
import { Flip, ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
        theme="dark"
      />
        <App />
    </Router>
  </Provider>
);
