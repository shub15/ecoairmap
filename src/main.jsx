import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx';
import Body from './components/Body.jsx';
import AboutUs from './components/AboutUs.jsx';
import Map from 'react-map-gl/dist/esm/components/map.js';
import AfforestationMap from './components/AfforestationMap.jsx';
import PollutionMap from './components/PollutionMap.jsx';
import TreeList from './components/TreeList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutUs props="green"/>
      },
      {
        path: "/map",
        element: <><PollutionMap /><TreeList/></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
