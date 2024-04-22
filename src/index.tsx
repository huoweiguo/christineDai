import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/reset.scss'
import '../src/assets/styles/common.scss'
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router'
import { Provider } from 'react-redux'
import store from './store'
import { StyleProvider } from '@ant-design/cssinjs'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <StyleProvider hashPriority="high">
          <RouterProvider router={router}></RouterProvider>
        </StyleProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
