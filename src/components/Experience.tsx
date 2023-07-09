import SectionTemplate from './SectionTemplate';

function Experience() {
  return (
    <SectionTemplate heading="Experience">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-3">
        <div className="max-w-2xl lg:max-w-none mx-auto col-span-3 lg:col-span-2 font-extralight leading-7">
          <h2 className="text-3xl text-yellow-500 mb-5 font-display">Experience</h2>
          <div className="mb-10">
            <div className="md:flex justify-between">
              <h3 className="font-display text-2xl text-white">Software Developer/Designer</h3>
              <p className="text-white">Dec 2012 - Present</p>
            </div>
            <p>CopyPress, Tampa FL</p>
            <p className="my-5">Throughout my time at CopyPress, I grew my skillset beyond a JavaScript developer and brought value to the company by managing our Digital Media department. In that role, I was responsible for meeting with clients, gathering requirements, envisioning a unique experience based on their requirements and delegating tasks to my team. In addition to management responsibilities, I also had the opportunity to work on solo projects where I was the primary designer or developer, and sometimes both! CopyPress granted me many opportunities and saw value in my work in designing, developing, marketing and management, with full trust in my professional execution for our digital media projects.</p>
            <p className="font-normal mb-3">Daily responsibilities include:</p>
            <ul className="list-disc ps-10">
              <li>Meeting with stakeholders to plan out future projects</li>
              <li>Meeting with the development team to review previous tasks and delegate future tasks</li>
              <li>Designing and developing solutions for our internal marketing department</li>
              <li>Project management for internal tool design and development</li>
              <li>Developing and maintaining our company website within WordPress</li>
              <li>Planning and implementing feature updates for our projects</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="md:flex justify-between">
              <h3 className="font-display text-2xl text-white">Front-End Developer/Designer</h3>
              <p className="text-white">​Oct 2011 - Oct 2012</p>
            </div>
            <p>Thuzi, Tampa, FL</p>
            <p className="my-5">I worked closely with a talented team of developers and designers at one of the top social media companies in the world to deliver cutting-edge social media experiences to high-level clients, helping them better interact with their fans. I was primarily responsible for designing and developing social applications that would integrate with many social media platforms. Our applications ranged from Flash-based games including leaderboards to Facebook coupon apps built in HTML/CSS/JavaScript. As a team, we consistently met strict deadlines and quick turnaround times to accommodate client requirements.</p>
            <p className="font-normal mb-3">Daily responsibilities included:</p>
            <ul className="list-disc ps-10">
              <li>Creating fully functional Flash games to be integrated with Facebook and Google Analytics</li>
              <li>Designing coupon and sweepstakes promotions to be used on Facebook</li>
              <li>Developing Facebook applications with HTML/CSS and JavaScript</li>
              <li>Creating Flash event activation interfaces to be used at live events around the country</li>
              <li>Developing in WordPress as well as writing custom functionality to be used within WordPress</li>
              <li>Editing videos and creating custom animations in After Effects</li>
              <li>Splicing dynamic videos into custom After Effects compositions to be used at live events</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="md:flex justify-between">
              <h3 className="font-display text-2xl text-white">Software Developer/Designer</h3>
              <p className="text-white">Oct 2010 - Oct 2011</p>
            </div>
            <p>Nielsen Media, Tampa, FL</p>
            <p className="my-5">At Nielsen, I worked with a media team that was responsible for collecting user data and displaying it in a clean, intuitive, well-designed user interface. I helped lead teams with members from different countries to collaborate and implement large projects in a timely fashion. We were primarily responsible for designing and developing highly visible projects throughout the company, which were then used by Nielsen’s many users. </p>
            <p className="font-normal mb-3">Daily responsibilities included:</p>
            <ul className="list-disc ps-10">
              <li>Implementing custom styles into Flex projects</li>
              <li>In charge of all design decisions on current and new projects</li>
              <li>Setting up communication between Flex and our Java server</li>
              <li>Creating event handlers and functions in AS3</li>
              <li>Creating classes in AS3</li>
              <li>Troubleshooting and problem-solving</li>
              <li>HTML/CSS Template design and coding</li>
              <li>Logo and icon design</li>
            </ul>
          </div>

          <div className="mb-10">
            <div className="md:flex justify-between">
              <h3 className="font-display text-2xl text-white">Flash Developer/Designer</h3>
              <p className="text-white">Jan 2008 - Oct 2010</p>
            </div>
            <p>SOE Software, Tampa, FL</p>
            <p className="mt-5">At SOE Software, I worked with a creative team that handled all aspects of the learning content development process. We handled multiple projects and met strict deadlines to finish implementations on time in the most time-sensitive of industries — U.S. elections. I was primarily responsible for designing and developing highly interactive Flash lessons, which were delivered on a learning management system (LMS).</p>
          </div>
        </div>
    </div>
    </SectionTemplate>
  );
};

export default Experience;
