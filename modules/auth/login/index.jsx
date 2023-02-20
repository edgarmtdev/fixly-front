import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/user";
import { CgSpinner } from "react-icons/cg";
import { Container } from "./styled";
import Link from "next/link";

export default function LoginMod({ user }) {
  const dispatch = useDispatch();
  const signIn = (event) => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = event.target;

    dispatch(login({ email, password }));
  };

  return (
    <Container>
      {user.loading && (
        <CgSpinner className="animate-spin h-7 w-7 mr-16 ml-auto absolute top-16 left-[40%]" />
      )}

      <form
        action=""
        className=" w-full tablet:w-1/2 p-5 tablet:p-12"
        onSubmit={signIn}
      >
        <h1 className=" text-[24px] desktop:text-[40px] font-semibold mb-5 tablet:mb-10">
          Login
        </h1>
        <div className=" border-b border-primary_variant-200 py-1 mb-8 tablet:mb-12">
          <input
            name="email"
            type="text"
            className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Email"
          />
        </div>
        <div className=" border-b border-primary_variant-200 py-1 mb-8 tablet:mb-12">
          <input
            name="password"
            type="text"
            className=" appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 tablet:py-1 px-2 leading-tight focus:outline-none"
            placeholder="Password"
          />
        </div>
        <button className=" bg-secondary_green-500 w-full p-2 rounded-sm text-white font-medium mt-5 hover:bg-secondary_green-400">
          Sign In
        </button>
        <p className=" text-center mt-10">
          No account?,{" "}
          <Link
            href={"/auth/signup"}
            className=" text-secondary_green-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
      <div className=" opacity-0 tablet:opacity-100">
        <img
          src="/images/loginImg.svg"
          alt=""
          className="tablet:w-[350px] tablet:ml-10"
        />
      </div>
    </Container>
  );
}
