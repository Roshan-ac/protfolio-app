import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
 
            <HashRouter>
 <div className="container bg-slate-900 h-[100vh]">
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            <Footer />
        </div>
            </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

