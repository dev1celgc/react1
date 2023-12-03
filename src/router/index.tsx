//组件形式的写法
// import App from "@/App"
// import Home from "@/views/Home"
// import About from "@/views/About"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// const baseRouter = () => (
//     <BrowserRouter>
//     <Routes>
//         <Route>
//             <Route path="/" element={ <App/>} >
//                   <Route path="/" element={<Navigate to="/home" />}></Route>
//                   <Route path="/home" element={ <Home/>} ></Route>
//                   <Route path="/about" element={ <About/>} ></Route>
//             </Route>
//         </Route>
//     </Routes>
//     </BrowserRouter>
// )

// export default baseRouter  
//对象形式的写法

import { Navigate } from "react-router-dom"
//路由懒加载
//懒加载模式需要添加loading组件
import React,{lazy} from "react"
const About = lazy(() => import("../views/About"))
const Home = lazy(() => import("../views/Home"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
//抽离loading组件
const withLoadingComponent = (component: JSX.Element) =>(
    <React.Suspense fallback={<div>loading</div>}>
         {component}
        </React.Suspense>
)


const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
             
             {
                path: "/page1",
                element: withLoadingComponent( <Page1 /> )
            },
            {
                path: "/page2",
                element: withLoadingComponent( <Page2 /> )
            },
        ]
    }, 
    // {
    //     path: "/home",
    //     element: withLoadingComponent( <Home /> )
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent( <About /> )
    // },
]

export default routes