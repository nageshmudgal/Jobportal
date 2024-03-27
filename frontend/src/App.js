import './App.css';
import { AdminLogin } from './layouts/admin/AdminLogin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLogin } from './layouts/user/UserLogin';
import { UserHomePage } from './layouts/user/UserHomePage';

import { About } from './layouts/general/About'
import { Contact } from './layouts/general/Contact'
import { HomePage } from './layouts/general/HomePage'
import { UserRegister } from './layouts/user/UserRegister';
import { GuestModule } from './layouts/general/GuestModule';
import { AdminDashboard } from './layouts/admin/AdminDashboard';
import Displaycompanies from './layouts/admin/DisplayCompanies';
import { EmployerLogin } from './layouts/employer/EmployerLogin';
import { EmployerDashboard } from './layouts/employer/EmployerDashboard';
import { EmployerRegister } from './layouts/employer/EmployerRegister';
import UserLogout from './layouts/user/UserLogout';
import EmployerLogout from './layouts/employer/EmployerLogout';
import AdminLogout from './layouts/admin/AdminLogout';
import { JobPost } from './layouts/employer/JobPost';
import EmpoyerPostedJobs from './layouts/employer/EmpoyerPostedJobs';
import EmployerHomepage from './layouts/employer/EmployerHomepage';
import ShowJobs from './components/ShowJobs';
import ShowCompanies from './components/ShowCompanies';
import AppliedJobs from './layouts/user/AppliedJobs';
import ApplicationReceived from './layouts/employer/ApplicationReceived';
import ShowJobs2 from './components/ShowJobs2';
import ViewUserProfile from './layouts/employer/ViewUserProfile';
import Displayjobs from './layouts/admin/DisplayJobs';
import Displayusers from './layouts/admin/DisplayUsers';
import Sidebar from './layouts/admin/SideBar';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<GuestModule />}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/jobs" element={<ShowJobs2 />} />
            <Route exact path="companies" element={<ShowCompanies />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="user/login" element={<UserLogin />} />
            <Route exact path="user/register" element={<UserRegister />} />
            <Route exact path="employer/login" element={<EmployerLogin />} />
            <Route exact path="employer/register" element={<EmployerRegister />} />
          </Route>

          <Route exact path="/admin/login" element={<AdminLogin />} />



          <Route exact path="/employer" element={<EmployerDashboard />}>
            <Route exact path="" element={<EmployerHomepage />} />
            <Route exact path="jobpost" element={<JobPost />} />
            <Route exact path="postedjobs" element={<EmpoyerPostedJobs />} />
            <Route exact path="applications/:id" element={<ApplicationReceived />} />
            <Route exact path="userprofile/:id" element={<ViewUserProfile />} />
            <Route exact path="displaycompanies" element={<Displaycompanies />} />
            <Route exact path="logout" element={<EmployerLogout />} />

          </Route>
          {/* <Route exact path="/admin" element = {<AdminDashboard />}> */}
          <Route exact path="/admin" element={<Sidebar />}>
            <Route exact path="" element={<AdminDashboard />} />
            <Route exact path="displaycompanies" element={<Displaycompanies />} />
            <Route exact path="displayusers" element={<Displayusers />} />
            <Route exact path="displayjobs" element={<Displayjobs />} />
            <Route exact path="logout" element={<AdminLogout />} />
          </Route>

          <Route exact path="/user" element={<UserHomePage />}>
            <Route exact path="jobs" element={<ShowJobs />} />
            <Route exact path="appliedjobs" element={<AppliedJobs />} />
            <Route exact path="companies" element={<ShowCompanies />} />
            <Route exact path="logout" element={<UserLogout />} />
          </Route>
          {/* <Route exact path="/user" element = {<ULogin />} />
          <Route exact path="/showusers" element = {<ShowUsers users={user} />} />
          <Route exact path="/register" element = {<Register reg={reg} />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;