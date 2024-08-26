import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast.success("The message has been sent successfully. We will contact you as soon as possible.");
    reset();
};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-1" >
            <input
              className=" h-[50px] w-full rounded outline-none bg-light px-4 placeholder:text-primary/50"
              type="text"
              placeholder="Your Name *"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z\s]{4,}$/,
                  message:
                    "Name must be at least 4 characters long and contain only letters",
                },
              })}
            />
            {errors.name && <p className="text-accent">{errors.name.message}</p>}
          </div>
          <div className="col-span-3 md:col-span-1" >
            <input
              className=" h-[50px] w-full rounded outline-none bg-light px-4 placeholder:text-primary/50"
              type="text"
              placeholder="Your Email *"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-accent">{errors.email.message}</p>
            )}
          </div>
          <div className="col-span-3 md:col-span-1" >
            <input
              className=" h-[50px] w-full rounded outline-none bg-light px-4 placeholder:text-primary/50"
              type="tel"
              placeholder="Your Phone *"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-accent">{errors.phone.message}</p>
            )}
          </div>
          <div className="col-span-3" >
            <textarea
              className="w-full h-[207px] mt-4 outline-none resize-none rounded bg-light px-4 pt-3 mb-8 placeholder:text-primary/50"
              placeholder="Your Massage"
              {...register("message", { required: "Message is required" })}
            ></textarea>

            {errors.message && (
              <p className="text-accent">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">send message</button>
        </div>
      </form>
    </>
  );
}

export default memo(ContactForm);
