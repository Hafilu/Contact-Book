import { useForm } from "react-hook-form";

function Forms({formSub}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSub = (data) => {
    data.id=Date.now();
    data.fav=false;
    formSub(data)
    reset();
     
  };

  return (
    <div className="col-sm-4 shadow rounded g-5 center">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onSub)}>
        <div className="form-group">
          <label className="col-form-label left">Name:</label>
          <input
            type="text"
            className="form-control left width"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name &&(
            <small className="text-danger left">{errors.name.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label left">Email:</label>
          <input
            type="email"
            className="form-control left width"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email &&(
            <small className="text-danger left">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label left">Phone:</label>
          <input
            type="text"
            className="form-control left width"
            {...register("phone", {
              required: "Phone is Required",
              pattern: {
                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                message: "Invalid phone no",
              },
            })}
          />
          {errors.phone &&(
            <small className="text-danger left">{errors.phone.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3 left"
          value="Add Contact"
        />
      </form>
    </div>
  );
}

export default Forms;
