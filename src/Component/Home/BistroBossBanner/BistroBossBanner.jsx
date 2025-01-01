import React from 'react';
import BannerImage from '../../../assets/home/banner.jpg';

const BistroBossBanner = () => {
    return (
        <div className="relative mb-20">
            <img src={BannerImage} alt="bannerimage" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-10 md:px-8 text-center rounded-md shadow-lg max-w-2xl">
                    <h2 className="text-4xl font-bold mb-4">Bistro Boss</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                        libero accusamus laborum deserunt ratione dolor officiis praesentium! 
                        Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus 
                        incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroBossBanner;
