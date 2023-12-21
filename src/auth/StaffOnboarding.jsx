import { useNavigate } from 'react-router-dom';
import AuthLayout from "./components/AuthLayout";
import StepIndicator from "./components/StepIndicator";
import Media from "../assets/Media.png";
import { FaForwardStep } from "react-icons/fa6";

const StaffOnboarding = () => {

  const navigate = useNavigate()

  const handleImageClick = () => {
    navigate('/staff-onboarding2');
  };


  return (
    <AuthLayout>
      <div className="flex justify-end items-center text-text pb-32">
        <FaForwardStep />
        <p className="font-raleway  font-medium ml-2">Skip this Process</p>
      </div>
      <div className="text-center text-text font-raleway">
        <p className="font-bold text-3xl">On-board Staff to Members</p>
        <StepIndicator currentStep={3} />
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] flex justify-between ">
          <div className="flex flex-col justify-center items-center"  onClick={handleImageClick}>
            <img src={Media} alt="file-type" className="w-44 h-36" />
            <p className=" text-subtleText mt-2">Active Directory/SSO</p>
          </div>
          <div className="flex flex-col justify-center items-center"  onClick={handleImageClick}>
            <img src={Media} alt="file-type" className="w-44 h-36" />
            <p className=" text-subtleText mt-2">CSV</p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default StaffOnboarding;
