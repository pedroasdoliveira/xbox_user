import { useRoutes } from 'react-router-dom'
import Add from './pages/Cadastro/Add'
import Home from './pages/Home/Home'

export const RouteList = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/add',
      element: <Add />
    }
  ])

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //     </Routes>
  //   </BrowserRouter>
  // )
}