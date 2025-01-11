import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import FoodCart from '../../../../Component/FootCart/foodCart';

const OrderTabs = ({items}) => {


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };


    return (
        <div >
              

<Swiper
        pagination={pagination} 
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="grid md:grid-cols-4 gap-3 mb-20">
          
        {
                items.map(item => <FoodCart
                key={item._id}
                item={item}
                ></FoodCart>)
              }

          </div></SwiperSlide>
        
      </Swiper>
            </div>
    );
};

export default OrderTabs;