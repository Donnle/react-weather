import React from 'react'
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {store} from "./redux/store";
import App from './components/App/App'

import './index.css'


const rootElement = document.getElementById("root")
const root = createRoot(rootElement!)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
