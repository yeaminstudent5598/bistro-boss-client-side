import featuredImage from '../../../assets/home/featured.jpg'
import SectionTitle from '../sectionTitle/sectionTitle';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed  py-20  mb-20">
                    
                    
                    <div className=" bg-slate-500 bg-opacity-60 items-center justify-center">
                        <SectionTitle
            subHeading={"Popular Items"}
            heading={"From Our Menu"}
            >

            </SectionTitle>
                        <div className='flex   py-10 text-white  justify-center'>
                       <div className='bg-flex'> <img className='w-[390px]' src={featuredImage} alt="" /></div>
                        <div className=" bg-opacity-90 p-10 md:px-8  rounded-md shadow-lg max-w-2xl">
                           <p>
                          <span> March 20, 2023</span><br />
<span>WHERE CAN I GET SOME?</span><br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                           </p>
                           <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                        </div>
                        </div>
                    </div>
                </div>
    );
};

export default Featured;