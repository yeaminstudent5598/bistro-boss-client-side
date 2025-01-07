import React from 'react';

const FoodCart = ({item}) => {
    const {name, image, price, recipe} =item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
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
            <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add To Cart </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCart;