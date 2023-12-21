import { useState } from 'react';
import AuthLayout from '../auth/components/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import StepIndicator from './components/StepIndicator';
import { IoMdAdd } from "react-icons/io";

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [organizationName, setOrganizationName] = useState('');
  const [organizationDomain, setOrganizationDomain] = useState('');
  const [newDomain, setNewDomain] = useState('');
  const [organizationEmail, setOrganizationEmail] = useState('');

  const navigate = useNavigate()

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleAddNewDomain = () => {
    setOrganizationDomain('');
    setNewDomain(''); // Reset new domain in case it was previously set
    setCurrentStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the final submission here
    console.log({ organizationName, organizationDomain, newDomain, organizationEmail });

    navigate('/account-activation');
  };

  return (
    <AuthLayout>
      <div className='text-center text-text font-raleway'>

      <p className="font-bold text-3xl">Create Your Account</p>
      <StepIndicator currentStep={1} />
      </div>
      <div className="space-y-4 ">
        <form onSubmit={handleSubmit} className='font-raleway'>
          {currentStep >= 1 && (
            <input
              type="text"
              placeholder="Organization Name"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="mt-3 w-full px-3 py-3 border border-subtleText  rounded-md outline-none text-text font-raleway text-sm"
              required
            />
          )}

          {currentStep >= 2 && currentStep < 3 && (
            <>
              <select
                value={organizationDomain}
                onChange={(e) => setOrganizationDomain(e.target.value)}
                className="mt-3 w-full px-3 py-3 border border-subtleText  rounded-md outline-none text-text font-raleway"
                required
              >
                <option value="">Select a domain</option>
                {/* Populate with options */}
              </select>
              {!newDomain && (
                <button
                  type="button"
                  onClick={handleAddNewDomain}
                  className="w-full mt-2 text-text text-sm font-medium flex justify-end items-center"
                >
                  
                  No organization Domain?<b className='text-primary ml-2'> 
                  <div className='flex items-center'>

                  <IoMdAdd size={15}/> <p className='ml-1'>Add New</p>
                  </div>
                  </b>
                  
                </button>
              )}
            </>
          )}

          {currentStep >= 3 && (
            <input
              type="text"
              placeholder="Create Domain Name"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              className="mt-3 w-full px-3 py-2 border border-subtleText  rounded-md outline-none"
              required
            />
          )}

          {currentStep >= 4 && (
            <input
              type="email"
              placeholder="Organization Email"
              value={organizationEmail}
              onChange={(e) => setOrganizationEmail(e.target.value)}
              className="mt-3 w-full px-3 py-2 border border-subtleText  rounded-md outline-none"
              required
            />
          )}

          {currentStep < 4 && (
            <button
              type="button"
              onClick={handleNextStep}
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-3"
            >
              Continue
            </button>
          )}

          {currentStep === 4 && (
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-3"
            >
              Create Account
            </button>
          )}
          <p className='text-center mt-3'>Already have login details? <Link to="/" ><b className='text-primary'>Login Here</b> </Link></p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default CreateAccount;
