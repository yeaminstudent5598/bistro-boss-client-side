import React from 'react';

const MenuItems = ({item}) => {
    const {name, image, price, recipe} =item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 350px 350px 350px'}} className='w-[80px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>
                    {name}-----------
                </h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
            
        </div>
    );
};

export default MenuItems;