import './index';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/Browse';
import Error from './Components/Error';
  
function App() {

  const appRouter = createBrowserRouter([
     {
      path: '/',
      element: <Login/>,
      errorElement: <Error/>
     },
     {
      path:'/browse',
      element: <Browse/>,
      errorElement: <Error/>
     }
  ]);
 
  return (
    <Provider store={appStore}>
           <RouterProvider router={appRouter}>
              <Body/>
           </RouterProvider>
    </Provider>
    );
}

export default App;
