const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center  mb-10 space-y-3">
      <h2 className="text-cyan-900 font-bold text-2xl lg:text-3xl">
        {heading}
      </h2>
      <p className=" text-cyan-950">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
