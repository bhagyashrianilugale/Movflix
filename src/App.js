import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
// import { createBrowserRouter } from "react-router-dom";
// import Browse from "./Components/Browse";
// import Login from "./Components/Login";
// import { RouterProvider } from "react-router-dom";


function App() {
//   const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <Login/>
//     },
//     {
//        path:"/browse",
//        element: <Browse/>
//     }

// ]);
  return (
    <Provider store={appStore}>
              <Body/>
    </Provider>
    );
}

export default App;
