import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import ApplicationsPage from './pages/ApplicationsPage';
import JobPage from './pages/JobPage';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassPage from './pages/ForgotPassPage';
import ResetPassPage from './pages/ResetPassPage';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" exact element={<NavBar />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage/>} />
            <Route path='/jobs/:id' element={<JobPage />} />
            <Route path='/apply/:id' element={<ApplyPage />}/>
            <Route path='/applications' element={<ApplicationsPage/>}/>

          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgetpassword' element={<ForgotPassPage />}/>
          <Route path='/resetpassword/:resettoken' element={<ResetPassPage />} />
         
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
