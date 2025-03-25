const HeroGradient = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <div className="absolute top-0 right-[400px] w-[400px] h-[400px] bg-cyan-300 blur-[120px] opacity-50 animate-pulse"></div>
      <div className="absolute top-[5%] left-0 w-[300px] h-[300px] bg-cyan-300 blur-[100px] opacity-40"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300 blur-[130px] opacity-50 animate-pulse"></div>
      <div className="absolute top-[10%] left-0 w-[350px] h-[350px] bg-orange-400 blur-[110px] opacity-40"></div>
    </div>
  );
};

export default HeroGradient;
