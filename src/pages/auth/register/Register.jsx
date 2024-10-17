import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
export function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { isValid, isSubmitting } = formState;

  async function handleRegister(data) {
    console.log(data);
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <h1 className="text-3xl font-semibold tracking-wide">Login</h1>
        <form onSubmit={handleSubmit(handleRegister)} className="">
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
              <Controller
                render={({ field }) => (
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    className="border-2 border-gray-400 p-1 rounded"
                    {...field}
                  />
                )}
                name="password"
                control={control}
                defaultValue=""
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
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <div>
              <Controller
                render={({ field }) => (
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    required
                    className="border-2 border-gray-400 p-1 rounded"
                    {...field}
                  />
                )}
                name="confirmPassword"
                control={control}
                defaultValue=""
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
            disabled={!isValid || isSubmitting}
            className="border-2 border-gray-400 p-1 rounded my-2 active:scale-95 hover:bg-gray-200 w-full"
          >
            Register
          </button>
        </form>

        <div className="w-1/2">
          <hr className="my-2 p-[1px] bg-gray-500 text-gray-500" />
          <div className="">
            <p>
              Already Registered? &nbsp;
              <Link
                to={"/login"}
                className="hover:border-b-2 pb-[2px] border-b-blue-500 text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
