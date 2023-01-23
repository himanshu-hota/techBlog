import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from '../pages/RootLayout';
import Homepage from './Homepage';
import ErrorPage from './ErrorPages/ErrorPage';
import PostDetails,{loader as postLoader} from './PostDetails';
import CreatePost from './CreatePost';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />} >

    <Route index element={<Homepage />} />
    <Route path='post/:postId' element={<PostDetails  />} loader={postLoader} />
    <Route path='/create-post' element={<CreatePost />} /> 
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
    );
}

export default App;
