import SectionTemplate from './SectionTemplate';

function Education() {
  return (
    <SectionTemplate heading="Education">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl text-rose-400 mb-5 font-display">Education</h2>
        <img className="rounded-lg mb-10" src="/images/default-sharing.jpg" alt="Full Sail University" />
        <div className="md:flex justify-between">
          <div>
            <p className="text-white font-semibold text-2xl font-display">Bachelor of Science (B.S.) - Digital Arts and Design</p>
            <p className="font-extralight">Full Sail University, Winter Park, FL</p>
          </div>
          <p className="text-white">Oct 2005 - Oct 2007</p>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Education;
