import SectionTemplate from './SectionTemplate';

const date = new Date();
let year = date.getFullYear();

function Contact() {
  return (
    <SectionTemplate heading="Contact">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-5 sm:px-10 grid grid-cols-2 gap-4 font-extralight leading-7">
          <div className="col-span-2 md:col-span-1 max-w-4xl min-w-full md:min-w-0 mx-auto mt-10">
            <h2 className="text-3xl text-fuchsia-500 mb-5 font-display">Contact</h2>
            <p className="mb-5">Please feel free to reach out if you like what you see and may be interested in collaborating on a project! I'm always looking for fun projects to be able to lend my talents to.</p>
            <h3 className="text-2xl text-white font-display">How to find me</h3>
            <p>Phone: <a href="tel:941-780-2760">941-780-2760</a></p>
            <p>Email: <a href="mailto:dkfast@gmail.com">dkfast@gmail.com</a></p>
            <a href="https://www.linkedin.com/in/derek-fast-54917126/">LinkedIn</a>
          </div>
          <div className="col-span-2 md:col-span-1 place-self-end max-w-sm relative rounded-full pt-5 pe-5 border-s-transparent border-b-transparent border-r-transparent border-2 border-solid border-fuchsia-500">
            <div className="h-24 w-24 absolute -bottom-0 -left-0 rounded-full border-2 border-solid border-fuchsia-500"></div>
            <img src="/images/profile.jpg" alt="Derek and dog" className="rounded-full border-s-transparent border-b-transparent border-t-transparent border-2 border-solid border-fuchsia-500 p-5" />
          </div>
      </div>
      <p className="text-center pb-10 pt-20 bg-neutral-900 font-extralight">© {year} RedBeardCreates.com</p>
    </SectionTemplate>
  );
};

export default Contact;
