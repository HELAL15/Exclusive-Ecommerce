import { ChangeEvent, FC, memo, useState } from "react";
import BreadCrumb from "../components/global/BreadCrumb";
import { SubmitHandler, useForm } from "react-hook-form";
import product from '../assets/main-product.png'
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

/**
 * ==> Stripe initialization
 */
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

/**
 * ==> Options for Elements
 */
const options:any = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  appearance: {
    /* Custom styling here */
  },
};







const CheckoutForm: FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError }:any = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const { client_secret: clientSecret }:any = await res.json();

    const { error }:any = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </form>
  );
};












/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Checkout: FC<IProps> = ({  }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

  type IFormInputs = {
    firstName: string;
    companyName: string;
    floor: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };


  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    // Add your submit logic here
  };

  const [method , setMethod] = useState<string>('cash')

const handleMethodChange = (e:ChangeEvent<HTMLInputElement>) =>{
  setMethod(e.target.value)
}




  return (
    <>
      <section className="pt-0">
        <BreadCrumb/>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mr-0 md:mr-20 lg:mr-32">
              <h3 className=" font-medium text-3xl mb-8">Billing Address</h3>
              <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="package">
                  <label className=" text-gray-400 after:content-['*'] after:text-accent" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="input"
                    // placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="package">
                  <label className=" text-gray-400 " htmlFor="companyName">company Name</label>
                  <input
                    type="text"
                    className="input"
                    // placeholder="company Name"
                    {...register("companyName")}
                  />
                  {errors.companyName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="package">
                  <label className=" text-gray-400 after:content-['*'] after:text-accent" htmlFor="address">street address</label>
                  <input
                    type="text"
                    className="input"
                    // placeholder="street address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="package">
                  <label className=" text-gray-400" htmlFor="firstName">Apartment, floor, etc. (optional)</label>
                  <input
                    type="text"
                    className="input"
                    // placeholder="Apartment, floor, etc."
                    {...register("floor")}
                  />
                  {errors.floor && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="package">
                  <label className=" text-gray-400 after:content-['*'] after:text-accent" htmlFor="firstName">town/city</label>
                  <input
                    type="text"
                    className="input"
                    // placeholder="town / city"
                    {...register("city", { required: true })}
                  />
                  {errors.city && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="package">
                  <label className=" text-gray-400 after:content-['*'] after:text-accent" htmlFor="firstName">phone number</label>
                  <input
                    type="number"
                    className="input"
                    // placeholder="phone number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="package">
                  <label className=" text-gray-400 after:content-['*'] after:text-accent" htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="input"
                    // placeholder="Email"
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div className="flex items-center gap-3 pt-4 ">
                  <input type="checkbox" className="cursor-pointer accent-accent w-4 h-4 rounded overflow-hidden" name="" id="save" />
                  <label htmlFor="save" className="cursor-pointer">save this information for next time</label>
                </div>
              </form>
            </div>
            <div className="">
              <div className="md:pr-10 lg:pr-32">
                <div className="items space-y-4 ">
                  <div className="item flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={product} className="w-[50px] h-[50px] object-contain" alt="" />
                      <p className="text-base font-normal">LCD Monitor</p>
                    </div>
                    <p>$550</p>
                  </div>
                  <div className="item flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={product} className="w-[50px] h-[50px] object-contain" alt="" />
                      <p className="text-base font-normal">LCD Monitor</p>
                    </div>
                    <p>$550</p>
                  </div>
                  <div className="item flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={product} className="w-[50px] h-[50px] object-contain" alt="" />
                      <p className="text-base font-normal">LCD Monitor</p>
                    </div>
                    <p>$550</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4 divide-y divide-gray-400">
                  <div className="subtotal pt-3 text-base font-normal flex justify-between items-center gap-2">
                    <h3>subtotal:</h3>
                    <h3>$ 2200</h3>
                  </div>
                  <div className="shipping pt-3 text-base font-normal flex justify-between items-center gap-2">
                    <h3>shipping:</h3>
                    <h3>free</h3>
                  </div>
                  <div className="total pt-3 text-base font-normal flex justify-between items-center gap-2">
                    <h3>total:</h3>
                    <h3>$ 2300</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <div className="f">
                    <div className="flex items-center gap-2">
                      <input 
                        checked={method === 'bank'}
                        onChange={handleMethodChange} value="bank" type="radio" name="payment" id="bank" className="accent-primary w-5 h-5 cursor-pointer" />
                      <label htmlFor="bank" className="text-base font-normal cursor-pointer">bank</label>
                    </div>
                    <div className={`duration-300 overflow-hidden ${method === "bank" ? "max-h-full" : "max-h-0"}`}>
                    <Elements stripe={stripePromise} options={options}>
                      <CheckoutForm />
                    </Elements>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      checked={method === 'cash'}
                      onChange={handleMethodChange} value="cash" type="radio" name="payment" id="cash" className="accent-primary w-5 h-5 cursor-pointer" />
                    <label htmlFor="cash" className="text-base font-normal cursor-pointer">Cash on delivery</label>
                  </div>
                </div>
              </div>
              <div className="coupon flex items-center flex-wrap gap-4 mt-8">
                <input type="text" placeholder="coupon code" className="rounded flex-grow px-8 py-3 w-full md:w-fit border border-gray-400 duration-300 focus:border-accent outline-none " />
                <button className="rounded px-8 py-3 btn-primary">apply coupon</button>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary w-full lg:w-fit ">place order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default memo(Checkout);