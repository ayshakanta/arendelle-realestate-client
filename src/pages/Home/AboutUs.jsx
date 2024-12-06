import SectionTitle from "../../components/SectionTitle/SectionTitle";
import about from "../../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <div className="bg-slate-100 p-3 lg:p-7 mb-10 drop-shadow-md">
      <SectionTitle
        heading={"Know About Us"}
        subHeading={
          "About Us: Building Trust, Creating Communities, and Turning Dreams into Reality."
        }
      ></SectionTitle>

      <div className="lg:flex gap-6 drop-shadow-md">
        <div className="flex-1">
          <img src={about} alt="" />
        </div>
        <div className="flex-1">
          <p className="space-y-2">
            Welcome to Arendelle, where your journey to finding the perfect
            property begins. With years of experience in the real estate
            industry, we take pride in connecting individuals, families, and
            businesses with their ideal spaces.
            <br />
            <hr className="pb-5" />
            Our mission is to make real estate simple, transparent, and
            stress-free. Whether you are buying, selling, renting, or investing,
            our dedicated team of professionals is here to guide you every step
            of the way. We combine deep market insights, personalized service,
            and innovative technology to deliver exceptional results tailored to
            your unique needs. <br />
            <hr className="pb-5" /> At Arendelle, we believe in more than just
            transactions — we believe in building lasting relationships. Our
            core values of integrity, trust, and excellence drive everything we
            do, ensuring that your experience with us is nothing short of
            extraordinary.
            <br />
            <hr className="pb-5" />
            Discover a partner you can rely on, a team that listens, and
            solutions that work. Let us turn your real estate dreams into
            reality together.
            <br />
            <hr className="pb-5" />
            Arendelle — Where Every Home Has a Story, and Every Client is
            Family.
            <hr />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
