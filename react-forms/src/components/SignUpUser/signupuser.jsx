import React from 'react';
import { useForm } from "react-hook-form";
import "./signupuser.css";
function SignUpUser() {
  const {
    register,handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (  <div className="kh">
    <span className="th"><b>Sign Up User Application</b></span>
    <form onSubmit={handleSubmit(onSubmit)} >
      <label className="th">First Name</label>
      <input
        {...register("firstName", { required: "First name is required" })}
        className="ih" placeholder='Abdul-Fatai'
      />
      {errors.firstName && <p className="er">{errors.firstName.message}</p>}
      
      <label className="th">Last Name</label>
      <input
        {...register("lastName", { required: "Last name is required" })}
        className="ih" placeholder='Yakubu'
      />
      {errors.lastName && <p className="er">{errors.lastName.message}</p>}
      
      <label className="th">Username</label>
      <input
        {...register("userName", { required: "A Username is required" })}
        className="ih" placeholder='301237300'
      />
      {errors.userName && <p className="er">{errors.userName.message}</p>}
      
      <label className="th">Email</label>
      <input
        type="email" placeholder='Ayakubu4@my.centennialcollege.ca'
        className="ih"
        {...register("email", { required: "A Email address is required", pattern: {value: /^\S+@\S+$/i, message: "Please enter a valid Email"} })}
      />
      {errors.email && <p className="er">{errors.email.message}</p>}

      <label className="th">Password</label>
      <input
        type="password"
        className="ih" placeholder='******'
        {...register("password", { required: "A Password is required" })}
      />
      {errors.password && <p className="er">{errors.password.message}</p>}
      
      <label className="th">Confirm Password</label>
      <input
        type="password"
        className="ih" placeholder='******'
        {...register("confirmedPassword", { 
          required: "Please Confirm your password",
          validate: value => value === getValues().password || "Passwords do not  match"
        })}
      />
      {errors.confirmedPassword && <p className="er">{errors.confirmedPassword.message}</p>}

      <button className="bh" type="submit">Submit :) </button>
    </form>
    </div>
  );
}

export default SignUpUser;
