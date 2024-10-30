import { Link } from "react-router-dom";
const Action = () => {
  return (
    <section className="px-4">
    <div className="wrapper py-8 lg:py-16 lg:px-[120px] bg-myCustomColor-lighterGreen rounded-3xl shadow-md shadow-myCustomColor-light  ">
      <div className="text-center mx-auto">
        <h2 className="section-headers">
          Ready To Start Your E-commerce Journey?
        </h2>
        <div className="md:max-w-[433px] mx-auto flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12  ">
          <button
            type="button"
            className="action-buttons bg-slate-950 hover:bg-primary active:bg-primary transitions"
          >
            Get Started
          </button>
          <button
            type="button"
            className="action-buttons bg-myCustomColor-light transitions hover:bg-primary"
          >
            <Link to="/ContactPage">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Action;
