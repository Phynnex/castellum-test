import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import StepIndicator from "./components/StepIndicator";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/staff-onboarding");
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center text-text font-raleway">
          <p className="font-bold text-3xl">Create a Password</p>
          <StepIndicator currentStep={2} />
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3 w-full px-3 py-3 border border-subtleText  rounded-md outline-none text-text font-raleway text-sm"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-3 w-full px-3 py-3 border border-subtleText  rounded-md outline-none text-text font-raleway text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-3"
            >
              Create Password
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default CreatePassword;
