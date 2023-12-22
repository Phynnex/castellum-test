import Logo from "../../assets/Logo.svg"

const AuthLayout = ({ children }) => {
    return (
      <div className="flex min-h-screen bg-accent">
        <div className="w-[45%] bg-accent p-20">
          <img src={Logo} alt="Castellum Logo" className="h-12 mb-6" />
          <div className="mt-32 ml-2 text-text font-raleway">
          <p className="font-bold text-3xl ">Welcome to Castellum</p>
          <p className="leading-loose mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corrupti sequi hic at praesentium numquam nulla aut, architecto maxime ad nobis vero a ullam! Accusantium incidunt sit totam magnam repellat.</p>
          </div>
        </div>
        <div className="w-[55%] flex items-center justify-center p-10 bg-white">
          <div className="max-w-md w-full">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  