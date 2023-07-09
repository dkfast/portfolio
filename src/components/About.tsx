import SectionTemplate from './SectionTemplate';

function About() {
  return (
    <SectionTemplate heading="About">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2 font-extralight leading-7">
          <p className="text-3xl text-red-500 mb-5 font-display">Hey there!</p>
          <p className="text-5xl text-white mb-10 font-display">My name is Derek.</p>
          <p>I'm a results-driven web developer/designer with a passion for creating visually captivating designs, compelling user experiences, and robust frontend development. My expertise spans UI/UX design, marketing, graphic design, and frontend development, making me a well-rounded creative professional. I have a proven track record of delivering impactful solutions and managing digital media teams.</p>
          <br></br>
          <p>In terms of frontend development, I'm skilled in HTML5, CSS3, and JavaScript, enabling me to collaborate effectively with developers and bring designs to life. I also have experience with frontend frameworks like Vue.js and React, as well as libraries like jQuery. Responsive design principles and optimizing websites for various devices and screen sizes are second nature to me.</p>
          <br></br>
          <p>When it comes to design work, I specialize in UI/UX, marketing, and graphic design. For UI/UX, I'm adept at creating intuitive user interfaces and crafting engaging experiences. I have a keen eye for user research, usability testing, and incorporating valuable feedback to optimize designs for enhanced user satisfaction. Additionally, my marketing skills come into play when developing cohesive brand identities, visual guidelines, and style guides. I excel at aligning designs with brand strategies and effectively communicating brand messages through visually appealing assets. As a graphic designer, I can create a wide range of marketing collaterals, including digital banners, social media graphics, and promotional materials.</p>
          <br></br>
          <p>Throughout my career, I've led and managed digital media teams, collaborating closely with designers, developers, and content strategists. Together, we've successfully delivered high-quality projects on time and within budget. I bring a strong project management acumen, ensuring smooth workflows and seamless communication throughout the creative process.</p>
          <br></br>
          <p>On the technical side, I'm proficient in industry-standard design tools like Adobe Creative Suite (Photoshop, Illustrator) and Figma. These tools empower me to create stunning designs and prototypes. Combined with my frontend development skills, I can bridge the gap between design and development seamlessly.</p>
          <br></br>
          <p>With my passion for crafting visually stunning designs, expertise in frontend development, UI/UX, marketing, and graphic design, I'm ready to contribute to your organization's creative initiatives. Let's connect and discuss how my skills and experience can elevate your brand's visual presence, deliver exceptional user experiences, and build robust frontend solutions.</p>
          <br></br>
          <p>Looking forward to connecting with you!</p>
        </div>
        {/* <div className="col-span-1">
          <div className="max-w-sm profile-picture ms-10 mb-10 rounded-full ps-2 pe-8 py-5 bg-gradient-to-b from-red-500 to-orange-500 hidden md:block">
            <img src="/images/profile.jpg" alt="Derek and dog" className="rounded-full" />
          </div>
        </div> */}
      </div>
    </SectionTemplate>
  );
};

export default About;
