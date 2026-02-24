import { useEffect, useState } from "react";

interface Props {
  messages: string[] | string;
}

function AnnouncementBar({ messages }: Props) {
  const [speed, setSpeed] = useState(30);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        setSpeed(18); // faster on mobile
      } else {
        setSpeed(35); // slower on desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="flex justify-center mt-7 md:mt-3">
      <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#0f4c45] via-[#145c52] to-[#0f4c45] shadow-md">
        <div
          className="flex items-center whitespace-nowrap text-white text-xs sm:text-sm font-medium tracking-wide py-3"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {[...messages, ...messages].map((msg, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-8">{msg}</span>
              <span className="opacity-40 mx-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
