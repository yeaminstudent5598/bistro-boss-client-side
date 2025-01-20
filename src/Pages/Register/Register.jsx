import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/Provider/AuthProvider";
import LoginErrorPage from "../../Component/LoginErrorPage/LoginErrorPage";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../Social/SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
   
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const {createUser, user, updateUserProfile} =useAuth();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data); 
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log('loogedUser', loggedUser);
      updateUserProfile(data.name, data.photoURL)

      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
  
        }
      axiosPublic.post('/users', userInfo)
      .then(res  => {
        if(res.data.insertedId) {
          console.log('user profile is added to database');
          reset();
          

        }

      })
      navigate('/')
        
      })
      
    })
  };
 
  return (
    <>
   {
    user ? (

      <LoginErrorPage/>
      
    ) : (
      <>
      <Helmet>
      <title>Bistro Boss | Register Now</title>
  </Helmet>
      <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("Photo URL", { required: true })}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true,
                     minLength: 6,
                      maxLength: 20 ,
                      pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}/

                    
                    })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                 {errors.password ?.type === "required" && (
        <p className="text-red-600">password is required</p>
      )}
                 {errors.password ?.type === "minLength"  && (
        <p className="text-red-600">password must be 6 characters</p>
      )}
                 {errors.password ?.type === "maxLength" && (
        <p className="text-red-600">password must be less than 20 characters</p>
      )}
                 {errors.password ?.type === "pattern" && (
        <p className="text-red-600">password must be one uppercase one lower case, one number and one special characters</p>
      )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="text-center">
                <p>you have already account?<Link className="text-blue-700" to={'/login'}>Login now</Link> </p>
            </div>
            
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
      </>
    )
   }
    
    </>
  );
};

export default Register;
