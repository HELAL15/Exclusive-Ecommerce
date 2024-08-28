import { FC, memo } from "react";
import login from "../../assets/login.png";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

/**
 * ==> Form data interface
 */
interface IFormInput {
  email: string;
  password: string;
}

/**
 * ==> Component
 */
const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    toast.success("Login successful.");
    reset();
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="bg-[#CBE4E8] aspect-[12/9] hidden md:block">
            <img src={login} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="container w-full lg:w-[75%] xl:w-[65%] ">
            <div className="space-y-8">
              <div className="space-y-1">
                <h2 className="text-2xl font-medium">Log in to Exclusive</h2>
                <p className="text-base">Enter your details below</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <input
                      type="text"
                      placeholder="enter your email"
                      className={`w-full h-[50px] border-b-2 px-4 text-primary placeholder-gray-500 focus:outline-none ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-accent"
                      }`}
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12">
                    <input
                      type="password"
                      placeholder="Password"
                      className={`w-full h-[50px] border-b-2 px-4 text-primary placeholder-gray-500 focus:outline-none ${
                        errors.password
                          ? "border-red-500"
                          : "border-gray-300 focus:border-accent"
                      }`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 flex items-center justify-between">
                    <button className="w-fit btn btn-primary">Login</button>
                    <Link
                      className="text-accent font-normal"
                      to={"/forget-password"}
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Login);
