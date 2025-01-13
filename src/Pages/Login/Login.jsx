import { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate,  } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Component/Provider/AuthProvider';
import LoginErrorPage from '../../Component/LoginErrorPage/LoginErrorPage';

const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] =useState(true)
    const {signIn, user} = useContext(AuthContext);
    const navigate = useNavigate()

         useEffect( () => {
            loadCaptchaEnginge(6);
         },[])


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate('/')
        })
    }


    const handleValidateCaptcha = e =>{
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value))
          {
            setDisabled(false);

          }
          else{
            setDisabled(true)
          }

          console.log(user_captcha_value);
    }

    return (
        <>
        {user ? (
        <LoginErrorPage/>
      ) : 
      
      ( <> <Helmet>
          <title>Bistro Boss | Login Now</title>
      </Helmet>
<div>
<div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center md:w-1/2 lg:text-left">
<h1 className="text-5xl font-bold">Login now!</h1>
<p className="py-6">
Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
quasi. In deleniti eaque aut repudiandae et a id nisi.
</p>
</div>
<div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
<form onSubmit={handleLogin} className="card-body">
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input name='email' type="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input name='password' type="password" placeholder="password" className="input input-bordered" required />
<label className="label">
<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>
<div className="form-control">
<label className="label">
<LoadCanvasTemplate />
</label>
<input type="text" ref={captchaRef} name='captcha' placeholder="type the captcha above" className="input input-bordered" required />
<button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>validate</button>

</div>
<div className="form-control mt-6">

<input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
</div>
</form>
<div className='text-center mb-10'>
<p>You are new?<Link className='text-blue-600 hover:text-purple-950 ' to={'/register'}>Create New Account</Link></p>
</div>
</div>
</div>
</div>
</div> </> )
        }
        </>
    );
};

export default Login;