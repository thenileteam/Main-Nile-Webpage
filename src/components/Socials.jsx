const Socials = () => {
    return (
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between ">
        <h5 className={`text-center lg:text-left font-medium`}>
        &copy; 2024 Nile. All rights reserved.
        </h5>
        <div className="socials mx-auto lg:mx-0 text-pry2 ">
                <a href="#" className="underline font-semibold"  >Terms of Service</a>
                <a href="#" className="ml-5 underline font-semibold">Privacy Policy</a>
        </div>
      </div>
    );
  };
  
  export default Socials;
  