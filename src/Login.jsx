import React from "react";
import { Form, useForm } from "react-hook-form";
import "./App.css"

function Login() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));

        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + " you are successfully Logged In");
            }else{
                console.log("Email or password did not match with our records");
            }
        }else{
            console.log("Email or Password didn't match ");
        }
    };

    return (
        <>
            <p className="title">Login Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}></form>
            <input type="email" placeholder="Enter valid Email" {...register("email", { required: true })}/>
            {errors.email && <span style={{ color: "red" }}>*Email* is mandatory </span>}
            <input type="password" placeholder="Password" {...register("passworrd")} />
            <input type={"submit"}
            style={{ backgroundColor: "#a1eafb"}}/>
        </>
    );
}

export default Login;