
import './App.css';
import Head from './components/Head.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import VideoContainer from './components/VideoContainer.jsx';
import WatchPage from './components/WatchPage.jsx';
import Body from './components/Body.jsx';
import { VideoProvider } from './utils/VideoContext.jsx';
import LikedVideo from './components/LikedVideo.jsx';
import { lazy,Suspense } from 'react';
import UserComponent from './components/UserComponent.jsx';

//const LikedVideo = lazy(() => import('./components/LikedVideo.jsx')); // Lazy load WatchPage
// Layout component to always show Head and add top padding
function Layout() {
  return (
    <>
      <Head />
      <div style={{ width: '100%', paddingTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Head is always rendered
    children: [
      { path: '', element: <Body /> },
      // { path: '/list', element: <VideoContainer /> },
      { path: '/watch', element: <WatchPage /> },
      //{ path: '/like', element: <Suspense fallback={<div>Loading...</div>}><LikedVideo /></Suspense> },
       { path: '/like', element: <LikedVideo /> },
    ]
  },
  {
    path:'/user',
    element:<UserComponent />
  }
]);

function App() {
  return <VideoProvider><RouterProvider router={appRouter} /></VideoProvider>;
}

export default App;



