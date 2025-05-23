const AboutMeImage = () => {
    return (
      <div className="h-[500px] w-[300px] relative">
        <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
          <img
            src="../../public/images/about-me.jpg"
            alt="About Me Image"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
      </div>
    );
  };
// const AboutMeImage = () => {
//   return (
//     <div className="relative w-full max-w-[300px] sm:max-w-[80%] h-[500px] sm:h-[400px]">
//       <div className="w-full h-full rounded-[100px] absolute overflow-hidden">
//         <img
//           src="../../public/images/about-me.jpg"
//           alt="About Me Image"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="absolute w-[250px] sm:w-[200px] h-[500px] sm:h-[400px] bg-orange bottom-[-30px] left-[-30px] sm:bottom-[-20px] sm:left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
//     </div>
//   );
// };

  
  export default AboutMeImage;