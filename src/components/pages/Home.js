import React from 'react';
import { ServiceCards, Work, CoruselHappy, CoruselBlog, Realty, Great } from "../All";
import Button from '@mui/material/Button';
import Swiper from 'swiper';
import Pagination from 'swiper'
import { SwiperSlide } from 'swiper/react';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
// import Style from 


const Home = () => {
    return (
        <div>
            <div className="create">
                <div className="create_text">
                    <div className="chiziqCreate"></div>
                    <h1 className="all_h1" data-aos="fade-right" data-aos-duration="1000">We help you create <br /> your <span className="creat_span">website</span></h1>
                    <p className="all_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
                    <div className="createBtn_group">
                        <Button variant="contained" className="createBtn">Get Started</Button>
                        <Button variant="outlined" className="createBtn">Contact Us</Button>
                    </div>
                </div>
                <div className="create_img">
                    <img data-aos="fade-left" data-aos-duration="1000" src="./img/homeImage.png" alt="" />
                </div>
            </div>
            <ServiceCards />
            {/* <div className="greatTf">
                <div className="great">
                    <div className="greatHeader">
                        <h5 className="blogCarusel_a">Portfolio</h5>
                        <h1 className="all_h1">Our Great Work</h1>
                        <ul>
                            <li><Button className="geatTab" size="large">Website Optimization</Button></li>
                            <li><Button className="geatTab" size="large">Website Redesign</Button></li>
                            <li><Button className="geatTab" size="large">Search Engine Optimization</Button></li>
                        </ul>
                        <Swiper slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper">
                            <SwiperSlide><img className="ourImages" src="./img/our1.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="ourImages" src="./img/our2.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="ourImages" src="./img/our3.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="ourImages" src="./img/our1.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="ourImages" src="./img/our1.png" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div> */}
            <Realty />
            <Work />
            {/* <CoruselHappy /> */}
            <CoruselBlog />
        </div>
    )
}
export default Home;