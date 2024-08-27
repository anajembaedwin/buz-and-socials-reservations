import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hotels from './pages/Hotels';
import Regions from './pages/Regions';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// Global CSS Reset (Add this to index.css or App.css)
import './index.css'; // Assuming index.css is where you apply global styles

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0 }}>
        {/* <Navbar /> */}
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Hotels from './pages/Hotels';
// import Regions from './pages/Regions';
// import Booking from './pages/Booking';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// // Layout component to include Navbar and Footer
// const Layout = ({ children }) => {
//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {/* <Navbar /> */}
//       <main style={{ flex: 1 }}>{children}</main>
//       {/* <Footer /> */}
//     </div>
//   );
// };


// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/hotels" element={<Hotels />} />
//           <Route path="/regions" element={<Regions />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;






// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
