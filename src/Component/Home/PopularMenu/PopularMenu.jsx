import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle/sectionTitle';
import MenuItems from '../Shared/Footer/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            
            setMenu(popularItems)})
    },[])
    return (
        <div className='mb-12'>
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"From Our Menu"}
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    menu.map(item => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
                <button className='btn'>View More</button>
            </div>
        </div>
    );
};

export default PopularMenu;