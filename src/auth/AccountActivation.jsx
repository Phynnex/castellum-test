import AuthLayout from "./components/AuthLayout";
import StepIndicator from "./components/StepIndicator";
import { useNavigate } from "react-router-dom";

const AccountActivation = () => {
  const navigate = useNavigate();


  const handleSubmit = () => {
    navigate('/create-password'); // Redirect to the create-password route
  };


  return (
    <AuthLayout>
      


      <div className='text-center text-text font-raleway'>

      <p className="font-bold text-3xl">Account Activation</p>
      <StepIndicator currentStep={1} />
      <p>Activation Link have been sent to fyneangala@aquila.io </p>

      </div>
      <button
       onClick={handleSubmit}
        type="submit"
        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-3"
      >
        Create Account
      </button>
    </AuthLayout>
  );
};

export default AccountActivation;
