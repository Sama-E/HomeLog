import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobView from './components/Jobs/JobView';
import JobAdd from './components/Jobs/JobAdd';
import JobEdit from './components/Jobs/JobEdit';
import JobProfile from './components/Jobs/JobProfile';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/view-jobs",
        element: <JobView />,
      },
      {
        path: "/add-Jobs",
        element: <JobAdd />,
      },
      {
        path: "/edit-job/:id",
        element: <JobEdit />,
      },
      {
        path: "/job-profile/:id",
        element: <JobProfile />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      
        <RouterProvider router={router} />
      
    </>
  )
}

export default App;