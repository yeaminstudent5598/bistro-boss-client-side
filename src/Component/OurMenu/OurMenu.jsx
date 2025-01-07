import { Helmet } from "react-helmet-async";
import Cover from "../Home/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../Home/sectionTitle/sectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
const OurMenu = () => {
    const [menu] =useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover title="Our Menu" img={menuImg}></Cover>
           

           {/* Main Cover */}
            <SectionTitle
            subHeading={"Don't Miss"} heading={"today's offer"}
            ></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory
            items={offered}
            ></MenuCategory>
            {/* dessert menu items */}
            
            <MenuCategory
            items={dessert}
            title={"dessert"}
            img={dessertImg}
            >

            </MenuCategory>
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            >

            </MenuCategory>
            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            >

            </MenuCategory>
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            >

            </MenuCategory>
        </div>
    );
};

export default OurMenu;