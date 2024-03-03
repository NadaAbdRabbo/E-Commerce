import React from 'react'
import Slider from 'react-slick';
import imgSlider1 from '../../assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg';
import imgSlider2 from '../../assets/images/grocery-banner-2.jpeg';
import imgSlider3 from '../../assets/images/slider-image-1.jpeg';
import imgSlider4 from '../../assets/images/slider-image-2.jpeg';
import imgSlider5 from '../../assets/images/slider-image-3.jpeg';

export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="row">
      <div className="col-md-8">
        <Slider {...settings}>
        <img src={imgSlider4} alt="imageslider" className='w-100' height={500} />
        <img src={imgSlider3} alt="imageslider" className='w-100' height={500} />
        <img src={imgSlider5} alt="imageslider" className='w-100' height={500} />

        </Slider>
      </div>
      <div className="col-md-4">
        <img src={imgSlider1} alt="imageslider" className='w-100' height={250} />
        <img src={imgSlider2} alt="imageslider" className='w-100' height={250} />
      </div>
    </div>

  )
}
