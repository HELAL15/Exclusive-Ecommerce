

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from 'react-toastify';
import './i18n.tsx'
import { ConfigProvider } from 'antd'
import RouterProgress from './RouterProgress.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from './providers/AuthProvider.tsx'




const lang = localStorage.getItem("i18nextLng")
const direction = lang  === 'ar' ? "rtl" : "ltr"

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider direction={direction}>
      <Router>
        <RouterProgress/>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop
          closeOnClick
          rtl={lang === 'ar' ? true : false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Flip}
          theme="dark"
        />
        <PersistGate persistor={persistor} loading={<p>loading....</p>} >
        <AuthProvider>
          <App />
        </AuthProvider>
        </PersistGate>

      </Router>
    </ConfigProvider>
  </Provider>
);
