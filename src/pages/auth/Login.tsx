import { FC, memo, useState } from "react";
import login from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { request } from "../../api/request";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/UserSlice";
import { setToken } from "../../helpers/Utils";
import { Spin } from "antd";



/**
 * ==> Form data interface
 */
interface IFormInput {
  email: string;
  password: string;
  account_type: string;
}

/**
 * ==> Component
 */
const Login: FC = () => {

   
  const [loading , setLoading] = useState(false)


  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({mode: 'onChange'});

const dispatch = useDispatch();

// for change base url

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {

    try{
      setLoading(true)
      const res = await request.post('user/login' , data);
      setLoading(false)
      toast.success(res.data.message)
      await dispatch(setUser(res?.data.data));
      const accessToken = res?.data.data.token
       request.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      await setToken('accessToken',accessToken)
      navigate('/' , {replace:true})
      reset();
    }catch(err:any){
      setLoading(false)
      toast.error(err.response.data.message)
    }
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
             
              <Spin size="large" spinning={loading} >
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
                    <button 
                    disabled={loading} 
                    className="w-fit  min-w-[150px] btn btn-primary
                     disabled:bg-slate-500 
                     disabled:cursor-not-allowed 
                     ">
                      {loading ? 'loading...' :'Login'}
                      </button>
                    <Link
                      className="text-accent hover:text-accent font-normal underline"
                      to={"/forget-password"}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input type="hidden" value={'user'} {...register("account_type") } />
                    <p className="flex items-center justify-center gap-2 w-full col-span-12">
                      <span>dont have account?</span>
                      <Link
                        className="text-accent hover:text-accent font-normal underline"
                        to={"/sign-up"}
                      >
                        create account
                      </Link>
                    </p>
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

export default memo(Login);
