import { FaCircleCheck } from "react-icons/fa6";
import AuthLayout from "./components/AuthLayout";

const SuccessfullOnboarding = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center items-center font-raleway  mt-32">
        <FaCircleCheck size={80} color="#EF5DA8" className="" />

        <p className="text-xl text-text font-bold mt-12">
          Staff On-boarded Succefully
        </p>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-16"
        >
   Go To Dashboard
        </button>
      </div>
    </AuthLayout>
  );
};

export default SuccessfullOnboarding;
