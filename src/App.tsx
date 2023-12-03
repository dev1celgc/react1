
import { useRoutes, Link} from 'react-router-dom'
import router from './router'
function App() {
  const outlet = useRoutes(router)
  return (
   <div className="app-header">
    {/* <Link to="/home">Home组件</Link>
    <Link to="/about">About组件</Link> */}
    {outlet}
   </div>
  )
}

export default App
