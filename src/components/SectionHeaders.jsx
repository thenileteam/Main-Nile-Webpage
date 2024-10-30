const SectionHeaders = ({ head, text }) => {
  return (
    <div className="text-center lg:mx-7">
      <h2 className="section-headers "> {head}</h2>
      <p className="py-2 lg:px-0 lg:text-[24px] text-pry3">{text}</p>
    </div>
  );
};

export default SectionHeaders;
