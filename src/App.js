import { Route, Routes } from 'react-router-dom';
import Home from './views/Home'
// import About from './views/About'
// import MyWork from './views/MyWork';
// import Contact from './views/Contact';
import NotFound from './views/NotFound';

//const Home = () => <h1>Home</h1>

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/about" element={<About/>}></Route>
          <Route path="/mywork" element={<MyWork/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route> */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes> 
    </div>
  );
}

export default App;
