import { useState } from "react";
import AuthLayout from "./components/AuthLayout"

const CreateNewPassword = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <AuthLayout>
    <div className="space-y-6 font-raleway text-text">
      <p className="font-bold text-3xl text-center">Create a new Password</p>
      <form className="mt-4 space-y-4" >
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
  )
}

export default CreateNewPassword
