import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/ValidationSchema.js";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiLock } from "react-icons/fi";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import LoadingRing from "../utils/LoadingRing.jsx";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => console.log(data);
  const btnText  = isValid   ? <LoadingRing/> : "Sign In";
  return (
    <>
      <main className="wrapper">
        {/* sign in container */}
        <section className="flex flex-col md:h-screen justify-center items-center gap-[20px]">
          {/* sign in form  */}
          <form
            action=""
            className="md:border-[0.6px] md:shadow-lg  md:w-[600px] border-[#6C6C6C] px-[19px] py-[16px] rounded-[16px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* sign in header */}
            <header className="text-center">
              <h1 className="md:text-[36px]  text-[26px] font-bold font-[700] tracking-[0%]">
                Welcome back
              </h1>
              <p className="md:text-[20px] py-4 font-medium font-[500] text-[#353535] leading-[100%]">
                Sign in to your account to continue
              </p>
            </header>
            {/* sign in input  */}
            <article className="flex flex-col gap-[10px]">
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
                  className="border block w-full rounded-[8px] px-[35px] h-[45px] bg-[#EFEFEF] border-0 "
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <HiOutlineEnvelope className="absolute left-3 bottom-3.5" />
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
                  className="border block w-full rounded-[8px] px-[35px] h-[45px] bg-[#EFEFEF] border-0 "
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
              {/* Form Submission */}
              <button
                type="submit"
                disabled={!isValid}
                className={`btn rounded-[10px]  border-[#4F39F6]  text-white md:text-[20px] leading-[100%] tracking-[0%] px-[15px] w-full mx-auto py-[12px] ${isValid ? "bg-[#3728AC]" : "bg-[#4F39F6] cursor-not-allowed"}`}
              >
                {btnText}{" "}
                <span>
                  <LiaLongArrowAltRightSolid />
                </span>
              </button>
              <p className="text-center leading-[100%] tracking-[0%] py-3 font-[400] font-medium  text-[14px] ">
                Don't have an account ?{" "}
                <Link to="/signup">
                  <span className="font-[700] font-bold text-[#4F39F6] text-[16px] ">
                    Sign up
                  </span>
                </Link>
              </p>
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

export default SignIn;
