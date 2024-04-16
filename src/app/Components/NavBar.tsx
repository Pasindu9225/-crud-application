import React from "react";
import Link from "next/link";

interface NavBarProps {
  buttonLink: string;
  buttonText: string;
}

const NavBar: React.FC<NavBarProps> = ({ buttonLink, buttonText }) => {
  return (
    <div className="w-full h-auto bg-slate-900 px-10 py-4 flex items-center justify-between">
      <div className="text-white font-bold text-2xl">To Do</div>
      <Link href={buttonLink}>
        <button className="w-auto h-full bg-green-600 p-2 px-4 flex items-center justify-center font-bold text-white rounded-sm">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
