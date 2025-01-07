import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroBossBanner from "./BistroBossBanner/BistroBossBanner";
import Cards from "./Cards/Cards";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonital from "./Testimonial/Testimonital";



const Home = () => {
    return (
        <div>
            <Helmet>
                            <title>Bistro Boss | Home</title>
                        </Helmet>
           <Banner/>
           <Category/>
           <BistroBossBanner/>
           <PopularMenu/>
           <Cards/>
           <Featured/>
           <Testimonital/>
        </div>
    );
};

export default Home;