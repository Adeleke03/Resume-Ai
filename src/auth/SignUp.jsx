import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../utils/ValidationSchema.js";
import { FiLock } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import LoadingRing from "../utils/LoadingRing.jsx";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => console.log(data);
  const btnText  = isValid   ? <LoadingRing/> : "Create account";

  return (
    <>
      <main className="wrapper">
        {/* section for Sign Up input field  */}
        <section className="flex flex-col md:h-screen justify-center items-center gap-[20px]">
          <form
            className="md:border-[0.6px] md:shadow-lg  md:w-[600px] border-[#6C6C6C] px-[19px] py-[16px] rounded-[16px]"
            onSubmit={handleSubmit(onSubmit)} // ✅ FIXED: Added onSubmit handler
          >
            <header className="text-center">
              <h1 className="md:text-[36px]  text-[26px] font-bold font-[700] tracking-[0%]">
                Create your account
              </h1>
              <p className="md:text-[20px] py-4 font-medium font-[500] text-[#353535] leading-[100%]">
                Join ResumeAI and let's design a resume that gets you noticed
              </p>
            </header>
            <article className="flex flex-col gap-[10px]">
              {/* div for first Name */}
              <div className="relative">
                <label
                  htmlFor="firstName"
                  className="font-bold text-[20px] font-[700] leading-[100%] tracking-[0%]"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="firstName"
                  className="border block w-full rounded-[8px] px-[30px] h-[45px] bg-[#EFEFEF] border-0 "
                  placeholder="Enter your first name"
                  {...register("firstName")}
                />
                <IoPersonOutline className="absolute left-3 bottom-4" />
              </div>

              <p className="text-red-600">{errors.firstName?.message}</p>

              {/* div for Last Name label and input */}
              <div className="relative">
                <label
                  htmlFor="lastName"
                  className="font-bold text-[20px] font-[700] leading-[100%] tracking-[0%]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border block w-full rounded-[8px] px-[30px] h-[45px] bg-[#EFEFEF] border-0 "
                  placeholder="Enter your last name"
                  {...register("lastName")}
                />
                <IoPersonOutline className="absolute left-3 bottom-4" />
              </div>
              <p className="text-red-600">{errors.lastName?.message}</p>

              {/* div for Email  */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="font-bold text-[20px] font-[700] leading-[100%] tracking-[0%]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border block w-full rounded-[8px] px-[30px] h-[45px] bg-[#EFEFEF] border-0 "
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <HiOutlineEnvelope className="absolute left-3 bottom-4" />
              </div>
              <p className="text-red-600">{errors.email?.message}</p>

              {/* div for Password */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="font-bold text-[20px] font-[700] leading-[100%] tracking-[0%]"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  id="password"
                  className="border block w-full rounded-[8px] px-[30px] h-[45px] bg-[#EFEFEF] border-0 "
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <FiLock className="absolute left-3 bottom-9.5" />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className=""
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <PiEyeLight className="absolute right-3 bottom-9.5" />
                  ) : (
                    <PiEyeSlashLight className="absolute right-3 bottom-9.5" />
                  )}
                </button>
              </div>
              {/* Error message for Password  */}
              <p className="text-red-600">{errors.password?.message}</p>

              {/* div for Confirm Password */}
              <div className="relative">
                <label
                  htmlFor="cPassword"
                  className="font-bold text-[20px] font-[700] leading-[100%] tracking-[0%]"
                >
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="cPassword"
                  className="border block w-full rounded-[8px] px-[30px] h-[45px] bg-[#EFEFEF] border-0 "
                  placeholder="Confirm your password"
                  {...register("cPassword")}
                />
                <FiLock className="absolute left-3 bottom-9.5" />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                  className=""
                  aria-label="Toggle password visibility"
                >
                  {showConfirmPassword ? (
                    <PiEyeLight className="absolute right-3 bottom-9.5" />
                  ) : (
                    <PiEyeSlashLight className="absolute right-3 bottom-9.5" />
                  )}
                </button>
              </div>
              {/* Error message for Confirm Password  */}
              <p className="text-red-600">{errors.cPassword?.message}</p>

              {/* Form Submission */}
              <button
                type="submit"
                disabled={!isValid}
                className={`btn rounded-[10px]  border-[#4F39F6]  text-white md:text-[20px] leading-[100%] tracking-[0%] px-[15px] w-full mx-auto py-[12px] ${isValid ? "bg-[#3728AC]" : "bg-[#4F39F6] cursor-not-allowed"}`}
              >
                {btnText}<span><LiaLongArrowAltRightSolid/></span>
              </button>
              <p className="text-center leading-[100%] tracking-[0%] py-3 font-[400] font-medium  text-[14px] ">Already have an account ?  <Link to="/signin"><span className="font-[700] font-bold text-[#4F39F6] text-[16px] ">Sign in</span></Link></p>
            </article>
          </form>

          <Link className="text-center" to="/">
            Back to Home
          </Link>
        </section>
      </main>
    </>
  );
};

export default SignUp;
