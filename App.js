import Home from './pages/home';
import Acadamic from './pages/acadamic';
import Acheive from './pages/acheive';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import Registration from './pages/registration';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/acadamics.html" element={<Acadamic />} />
          <Route path="/acheive.html" element={<Acheive />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/blogs.html" element={<Blogs />} />
          <Route path="/registration.html" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
