import { FaCircleCheck } from "react-icons/fa6";

const StepIndicator = ({ currentStep }) => {
    const steps = ['STEP 1', 'STEP 2', 'STEP 3'];
    return (
      <div className="flex justify-center items-center  my-6">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`px-4 py-1 rounded-full   ${
              currentStep === index + 1 ? ' text-text text-xs' : ' text-text text-xs'
            }`}
          >
            <div className="flex flex-col items-center">
            <FaCircleCheck size={30} className={`${
              currentStep === index + 1 ? 'text-secondary mb-2' : ' text-tetiary mb-2'
            }`}/>
            {step}
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default StepIndicator;



