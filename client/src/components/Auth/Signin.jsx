import React, { useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { BsEyeFill , BsEyeSlashFill, BsGoogle} from "react-icons/bs";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(true);
  function passwordHide() {
    type ? setType(false):setType(true);
  }

  return (
    <>
      <div className="icon inline-block ml-5">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text">
          GoTrek
        </h1>
      </div>
      <div className="flex mt-20 justify-center gap-20">
        <div className="form-area bg-slate-200 w-[40vw] h-[80vh] rounded-md flex flex-col items-center">
          <h1 className="text-5xl mt-5 mb-3">Hi there!</h1>
          <h4 className="text-lg">Welcome to GoTrek</h4>
          <div className="buttons flex gap-32 mt-8">
            <button className="border-2 flex gap-2 font-semibold border-slate-950 px-6 py-3 rounded-md">
              <BsGoogle className="mt-0.5 text-xl" />
              Google
            </button>
            <button className="border-2 flex gap-2 font-semibold border-slate-950 px-6 py-3 rounded-md">
              <MdPhoneIphone className="mt-0.5 text-xl" /> Phone
            </button>
          </div>
          <div className="flex items-center w-full my-8 max-w-[90%]">
            <hr className="flex-grow border-t border-slate-400 mx-2" />
            <span className="px-4 font-semibold text-black">Or</span>
            <hr className="flex-grow border-t border-slate-400 mx-2" />
          </div>
          {/* Email Input */}
          <div className="email-input w-[80%] mb-4">
            {" "}
            {/* Added margin bottom for spacing */}
            <input
              type="text"
              placeholder="Enter email"
              className="rounded-md border-slate-700 border-2 w-full h-12 px-3 box-border"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
         
          <div className="password-input w-[80%] mb-4 relative">
            <input
              type={type?"password":"text"}
              placeholder="Enter password"
              className="rounded-md border-slate-700 border-2 w-full h-12 px-3 box-border"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer "
              onClick={passwordHide}
            >
              {type?<BsEyeSlashFill/>:<BsEyeFill/>}
            </button>
          </div>

          <h5 className="text-orange-400 my-3 cursor-pointer">
            Forgot Password?
          </h5>
          <button className="w-[80%] bg-orange-400 text-white h-10 rounded-md font-semibold">
            Sign In
          </button>
        </div>
        <div className="image-area bg-slate-200 w-[40vw] h-[80vh] rounded-[26px_128px]">
          <img
            src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[40vw] h-[80vh] rounded-[26px_128px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signin;
