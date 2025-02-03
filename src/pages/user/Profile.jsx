import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors, isSubmitting } = formState;

  const onMySubmit = async (data) => {
    // await new Promise((resolve) => {
    //   return setTimeout(resolve, 4000);
    // });
    // console.log(data);

    await axios
      .post("http://localhost:5000/api/profile", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onMySubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              placeholder={"Input your first name"}
              name="firstname"
              type="text"
              errors={errors}
            />
            <FormInputs
              register={register}
              placeholder={"Input your last name"}
              name="lastname"
              type="text"
              errors={errors}
            />

            <Buttons text="create profile" isPending={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Profile;
