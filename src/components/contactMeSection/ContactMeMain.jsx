import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-24 bg-gray-900 p-8 rounded-2xl">
  <div className="w-full">
    <ContactMeLeft />
  </div>
  <div className="w-full">
    <ContactMeRight />
  </div>
</div>

    </div>
  );
};

export default ContactMeMain;