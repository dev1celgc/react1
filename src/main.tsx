import React from 'react'
import ReactDOM from 'react-dom/client'
//在APP之前引入reset-css进行样式初始化
import 'reset-css'
//UI框架的样式

//全局样式
import './assets/global.scss'
//组件的样式
import App from './App.tsx'
//import Router from './router'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
