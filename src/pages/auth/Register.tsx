import { FC, memo, useState } from "react";
import login from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { request } from "../../api/request";
import { Spin } from "antd";
import { setToken } from "../../helpers/Utils";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/UserSlice";

/**
 * ==> Form data interface
 */
interface IFormInput {
  first_name:string;
  last_name:string;
  email: string;
  password: string;
  password_confirmation: string;
  account_type: string;
}

/**
 * ==> Component
 */
const Register: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const password = watch("password", "");

  const [loading , setLoading] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)
    try{
      const res = await request.post('user/register' , data);
      toast.success(res.data.message)
      setLoading(false)
      const accessToken = res?.data.data.token
      setToken('accessToken' , accessToken)
      dispatch(setUser(res?.data.data))
      reset();
      navigate('/')
    }catch(err:any){
      setLoading(false)
      toast.error(err.response.message);
    }
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="bg-[#CBE4E8] aspect-[12/9] hidden md:block">
            <img
              src={login}
              alt="Register"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="container w-full lg:w-[75%] xl:w-[65%] ">
            <div className="space-y-8">
              <div className="space-y-1">
                <h2 className="text-2xl font-medium">create your account</h2>
                <p className="text-base ">
                  Fill in your details below
                </p>
              </div>
              <Spin spinning={loading} size="large" >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" defaultValue='user' {...register("account_type")} />
                  <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                      <input
                        type="text"
                        placeholder="first name"
                        className={`w-full h-[50px] border-b-2 px-4 text-primary placeholder-gray-500 focus:outline-none ${
                          errors.first_name
                            ? "border-red-500"
                            : "border-gray-300 focus:border-accent"
                        }`}
                        {...register("first_name", {
                          required: "first name is required",
                        })}
                      />
                      {errors.first_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-6">
                      <input
                        type="text"
                        placeholder="last name"
                        className={`w-full h-[50px] border-b-2 px-4 text-primary placeholder-gray-500 focus:outline-none ${
                          errors.last_name
                            ? "border-red-500"
                            : "border-gray-300 focus:border-accent"
                        }`}
                        {...register("last_name", {
                          required: "name is required",
                        })}
                      />
                      {errors.last_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.last_name.message}
                        </p>
                      )}
                    </div>
                    {/* Email Field */}
                    <div className="col-span-12">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full h-[50px] border-b-2 px-4 text-primary placeholder-gray-500 focus:outline-none ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-300 focus:border-accent"
                        }`}
                        {...register("email", {
                          required: "Email is required",
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

                    {/* Password Field */}
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

                    {/* Confirm Password Field */}
                    <div className="col-span-12">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className={`w-full h-[50px] border-b-2 px-4 text-primary placeholder-gray-500 focus:outline-none ${
                          errors.password_confirmation
                            ? "border-red-500"
                            : "border-gray-300 focus:border-accent"
                        }`}
                        {...register("password_confirmation", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === password || "Passwords do not match",
                        })}
                      />
                      {errors.password_confirmation && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password_confirmation.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button and Login Link */}
                    <div className="col-span-12 flex items-center justify-between mt-4">
                      <button
                        type="submit"
                        className="w-fit  min-w-[150px] btn btn-primary
                      disabled:bg-slate-500 
                      disabled:cursor-not-allowed"
                        disabled={loading}
                        
                      >
                        {loading ? <Spin /> :'create account'}
                      </button>
                      
                    </div>
                    <div className="col-span-12 flex items-center justify-center gap-2">
                      <p className="text-base">
                        Already have an account?
                      </p>
                      <Link
                        className="text-sm font-medium underline"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </Spin>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Register);
