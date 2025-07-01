import { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          gsap.to(".loader-screen", {
            y: "-100%",
            duration: 1,
            ease: "power2.inOut",
          });
        }
        return Math.min(prev + 2, 100);
      });
    }, 20); // 0.02s * 50 = ~1s total

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {progress}%
      </div>
    </div>
  );
};

export default Loader;
