import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { NavigationBar } from './components/NavigationBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BlogDetails } from './components/BlogDetails'
import { BlogCategory } from './components/BlogCategory'
import { Login } from './components/Login'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBlogs } from './features/blog/blogSlice';
import { fetchBlogs } from './features/blog/blogSlice';
import {useEffect} from 'react';

function App() {

  const blogs = useSelector(getAllBlogs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home blogs = { blogs } />} ></Route>
          <Route path='blog-detail/:blogID' element={<BlogDetails blogs = { blogs } />} ></Route>
          <Route path='blog-category/:categoryID' element={<BlogCategory />} ></Route>
          <Route path='login' element={<Login />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
