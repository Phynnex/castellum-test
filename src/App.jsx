import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./auth/CreateAccount";
import AccountActivation from "./auth/AccountActivation";
import CreatePassword from "./auth/CreatePassword";
import StaffOnboarding from "./auth/StaffOnboarding";
import StaffOnboarding2 from "./auth/StaffOnboarding2";
import SuccessfullOnboarding from "./auth/SuccessfullOnboarding";
import Login from "./auth/Login";
import ForgetPassword from "./auth/ForgetPassword";
import CreateNewPassword from "./auth/CreateNewPassword";

function App() {
  

  return (
    <Router>
 <Routes>
  <Route>
  <Route path="/" element={<Login />} />
  <Route path="/create-account" element={<CreateAccount />} />
  <Route path="/account-activation" element={<AccountActivation />} />
  <Route path="/create-password" element={<CreatePassword />} />
  <Route path="/staff-onboarding" element={<StaffOnboarding />} />
  <Route path="/staff-onboarding2" element={<StaffOnboarding2 />} />
  <Route path="/successfull-onboarding" element={<SuccessfullOnboarding />} />

  <Route path="/forget-password" element={<ForgetPassword />} />
  <Route path="/create-new-password" element={<CreateNewPassword />} />

  </Route>
 </Routes>
    </Router>
  )
}

export default App
