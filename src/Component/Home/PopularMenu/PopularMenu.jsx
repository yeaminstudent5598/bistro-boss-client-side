import SectionTitle from '../sectionTitle/sectionTitle';
import MenuItems from '../Shared/Footer/MenuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {

   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular')

    
    return (
        <div className='mb-12'>
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"From Our Menu"}
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    popular.map(item => <MenuItems
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