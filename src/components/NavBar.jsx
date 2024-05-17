import React from "react";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRunning } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import logo from "../assets/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <nav className="bg-[#FFFFFF] text-slate-600 h-screen lg:w-[15%] p-8 py-4 flex flex-col gap-4 font-[sintony]">
      <div className="flex items-center justify-center gap-2 text-2xl font-bold my-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <p className="text-black tracking-wider">GymPlus</p>
      </div>
      <div
        className={`flex gap-3 items-center cursor-pointer text-lg font-bold mt-8 px-8 py-4 rounded-full ${
          path === "/" ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        }`}
        onClick={() => {
          navigate("/");
        }}
      >
        <RxDashboard className="h-7 w-7" />
        Dashboard
      </div>
      <div
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-full ${
          path === "/exercises" ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        }`}
        onClick={() => {
          navigate("/exercises");
        }}
      >
        <FaRunning className="h-7 w-7" />
        Exercises
      </div>
      <div
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-full ${
          path === "/goals" ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        }`}
        onClick={() => {
          navigate("/goals");
        }}
      >
        <GiBullseye className="h-7 w-7" />
        Goals
      </div>
      <div
        className={`flex gap-3 cursor-pointer text-lg font-bold px-8 py-4 rounded-full ${
          path === "/foods" ? "bg-[#f5dbdf]" : "hover:bg-[#f8eeef]"
        }`}
        onClick={() => {
          navigate("/foods");
        }}
      >
        <GiMeal className="h-7 w-7" />
        Foods
      </div>
      <div className="flex items-center justify-center gap-8 fixed bottom-0 px-7 my-12">
        <a
          href="https://github.com/dushyant2901/GymPlus"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-[#e09999] hover:text-black" />
        </a>
        <a
          href="https://x.com/Dushyantcodes?mx=2"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitterX className="h-7 w-7 cursor-pointer text-[#e09999] hover:text-black" />
        </a>
        <a
          href="https://in.linkedin.com/in/dushyant-pratap-singh-04b24619b"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-[#e09999] hover:text-blue-600" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
