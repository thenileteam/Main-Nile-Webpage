const SectionHeaders = ({ head, text }) => {
  return (
    <div className="text-center lg:mx-7">
      <h2 className="section-headers "> {head}</h2>
      <p className="p-3 lg:px-0 text-lg lg:text-[20px]">{text}</p>
    </div>
  );
};

export default SectionHeaders;
