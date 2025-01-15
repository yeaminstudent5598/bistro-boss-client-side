import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCart = ({item}) => {
    const {name, image, price, recipe, _id} =item;
     const {user} = useAuth();
     const navigate = useNavigate();
     const location = useLocation();
     const axiosSecure = useAxiosSecure()
     const [, refetch] = useCart();

    const handleAddToCart = () => {
      if(user && user.email) {
        //send cart  item to the database
        
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price

        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // REFECTH THE ALL DATA
            refetch()
          }
        })
        
      }
      else{
        Swal.fire({
          title: "Please Login",
          text: "You won't be able to revert this without login!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, I want to Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt={name} />
        </figure>
        <p className='absolute right-0 mt-4 mr-4 bg-gray-900 text-white'>${price}</p>
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
            <button onClick={ handleAddToCart } className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add To Cart </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCart;