import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthLayout from "./components/AuthLayout";
import StepIndicator from "./components/StepIndicator";

const StaffOnboarding = () => {
  const [fileType, setFileType] = useState('');

  const navigate = useNavigate()  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileType) {
      navigate('/successfull-onboarding');
    } else {
      alert('Please select a file type to proceed.');
    }
  }


  const handleFileType = () => {
    setFileType('');

  };
  return (
    <AuthLayout>
      <div className="text-center text-text font-raleway">
        <p className="font-bold text-3xl">On-board Staff to Members</p>
        <StepIndicator currentStep={3} />
      </div>
      <form className="font-raleway" onSubmit={handleSubmit}>
        <>
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            className="mt-3 w-full px-3 py-3 border border-subtleText  rounded-md outline-none text-text font-raleway"
            required
          >
            <option value="">--- select ---</option>
            <option value="azure-ad">Azure AD</option>
            <option value="csv">CSV</option>
          </select>

          <button
            type="button"
            onClick={handleFileType}
            className="w-full mt-2 text-text text-sm font-medium flex justify-end items-center pr-4"
          ></button>
        </>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-3"
          >
            On-board
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default StaffOnboarding;
