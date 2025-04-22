import React, { useState } from "react";
import Login from "../Login/Login";

function RagisterForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      alert("❌ Please fill out all fields.");
      return;
    }

    alert("🎉 Registered Successfully!");
  };

  const HandleLogin = () => {
    setIsLogin(true);
  };

  if (isLogin) {
    return <Login />;
  }

  return (
    <div className="flex flex-col items-center text-center">
      <img
        className="mt-[2.3rem]"
        src="images/businesslogo.svg"
        alt="Business Logo"
      />
      <p className="text-[25px] 2xl:text-[33px] text-[#FFF5D9] my-[1.5rem] 2xl:my-[2.2rem]">
        Ragister as business
      </p>

      <form className="flex flex-col gap-[0.7rem]" onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#000000D4] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[18px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
          placeholder="Enter Your Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#000000D4] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[18px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
          placeholder="Enter Your Email"
          required
        />
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-[#000000D4] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[18px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
            required
          />
        </div>
        <button
          className="bg-[#262626] mt-[2rem] w-[300px] 2xl:w-[400px] text-[14px] 2xl:text-[19px] text-[#FCFCD8] rounded-full py-[0.8rem] 2xl:py-[1.2rem] px-[2rem] 2xl:px-[2.7rem]"
          type="submit"
        >
          Create an account
        </button>
      </form>

      <p className="text-[#FCFCD8] my-[1.5rem]">
        <span className="text-[14px] 2xl:text-[18px]">Already have an account?</span>&nbsp;
          <button className="text-[#E1FF26] text-[14px] underline cursor-pointer 2xl:text-[18px]" onClick={HandleLogin}>
           Sign In
          </button>
      </p>

      <p className="text-[14px] p-[0.5rem] text-[#FFF5D9] 2xl:text-[18px]">
        <span>By creating an account you agree with our </span>
        <span className="underline cursor-pointer">Terms of Service, </span>
        <span className="underline cursor-pointer">Privacy Policy, </span>
        <span>and our default </span>
        <span className="underline cursor-pointer">
          Notification Settings.
        </span>
      </p>
    </div>
  );
}

export default RagisterForm;
