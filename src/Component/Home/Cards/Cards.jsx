import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle/sectionTitle';
import Card from '../Card/Card';

const Cards = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:1000/menu')
        .then(res => res.json())
        .then(data => {
            const cardItems = data.filter(item => item.category === 'popular')
            
            setMenu(cardItems)})
    },[])
    
    return (
        <div>
            <SectionTitle
            subHeading={"Should Try-"}
            heading={"CHEF RECOMMENDS"}
            >

            </SectionTitle>

            <div className='grid md:grid-cols-3'>

    {
        menu.map(item => <Card
        key={item._id}
        item={item}
        >

        </Card>)
    }

            </div>
        </div>
    );
};

export default Cards;