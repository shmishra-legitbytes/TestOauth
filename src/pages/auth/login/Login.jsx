import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isValid, isSubmitting } = formState;
  async function handleLogin(data) {
    console.log(data);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <h1 className="text-3xl font-semibold tracking-wide">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email *</label>
            <Controller
              render={({ field }) => (
                <input
                  type="email"
                  id="email"
                  required
                  className="border-2 border-gray-400 p-1 rounded"
                  {...field}
                />
              )}
              name="email"
              control={control}
              defaultValue=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password *</label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                className="border-2 border-gray-400 p-1 rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="border-2 border-gray-400 p-1 rounded"
              >
                ^^
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="border-2 border-gray-400 p-1 rounded my-2 active:scale-95 hover:bg-gray-200 w-full"
          >
            Login
          </button>
        </form>

        <div className="w-1/2">
          <hr className="my-8 p-[1px] bg-gray-500 text-gray-500" />
          <div className="">
            <button
              disabled={isSubmitting}
              className="border-2 border-gray-400 p-1 rounded my-2 active:scale-95 hover:bg-gray-200 w-full transition-all ease-in-out duration-100"
            >
              Login with Google
            </button>
          </div>
          <hr className="my-8 p-[1px] bg-gray-500 text-gray-500" />
          <div className="">
            <p>
              Not Registered? &nbsp;
              <Link
                to={"/register"}
                className="hover:border-b-2 pb-[2px] border-b-blue-500 text-blue-500"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
