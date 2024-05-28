import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/Browse';
  
function App() {

  const appRouter = createBrowserRouter([
     {
      path: '/',
      element: <Login/>
     },
     {
      path:'/browse',
      element: <Browse/>
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
