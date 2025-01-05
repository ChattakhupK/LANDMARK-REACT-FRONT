import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";
import Buttons from "@/components/form/Buttons";

const Camping = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors, isSubmitting } = formState;

  const onMySubmit = async (data) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, 4000);
    });
    console.log(data);
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create camping</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onMySubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="Input Your Title"
              errors={errors}
            />
            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Input Your Price"
              errors={errors}
            />
            <TextAreaInput
              register={register}
              name="description"
              type="text"
              placeholder="Input Your Description"
              errors={errors}
            />
          </div>
          <Buttons
            text="create camping"
            isPending={isSubmitting}
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Camping;

// const handleOnChange = (e) => {
//     setValue({
//       ...value,
//       [e.target.name]: e.target.value,
//     });
//     console.log(e.target.name);
//     console.log(e.target.value);
//   };
//   console.log(value);
