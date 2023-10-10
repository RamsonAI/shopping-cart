import React from "react";
import { useForm } from "react-hook-form";
import "./App.css"

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter your Name" {...register("name")} />
        <input type="email" placeholder="Enter valid Email" {...register("email", { required: true })}/>
        {errors.email && <span style={{ color: "red" }}>*Email* is mandatory </span>}
        <input type="password" placeholder="Password" {...register("passworrd")} />
        <input type={"submit"}
          style={{ backgroundColor: "#a1eafb"}}/>
      </form>
    </>
  );
}

export default App;