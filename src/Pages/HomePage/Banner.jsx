import React from "react";
import CommonBtn from "../Shared/CommonBtn.jsx";
import chair from "../../assets/images/chair.png";
import bannerBg from '../../assets/images/bg.png'
const Banner = () => {
  return (
    <div class="hero min-h-screen" style={{  
      backgroundImage: `url(${bannerBg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll'
    }}>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img className="min-w-sm lg:w-1/2" src={chair} alt="doctor chair" />
        <div>
          <h1 class="text-5xl font-bold text-neutral">Your New Smile Starts Here</h1>
          <p class="py-6 text-neutral">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <CommonBtn>GET STARTED</CommonBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
