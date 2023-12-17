//  index-five     //
import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineGitlab, AiOutlinePieChart} from "react-icons/ai"
import { VscBook, VscFeedback } from 'react-icons/vsc'
import { RiPresentationFill } from 'react-icons/ri'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PopularCategories() {
    const [settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // swipeToSlide: true,
        autoplay: true,
        speed: 2000, autoplaySpeed: 1500,
        CssEase: "linear",
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });

    const Categories = [
        {
            icon: AiOutlineGitlab,
            title: 'Skill Training',
            jobs: '74 Jobs'
        },
        {
            icon: VscBook,
            title: 'Self Employement',
            jobs: '20 Jobs'
        },
        {
            icon: AiOutlinePieChart,
            title: 'Councelling',
            jobs: '35 Jobs'
        },
        {
            icon: VscFeedback,
            title: 'Jobs For Women',
            jobs: '46 Jobs'
        },
        {
            icon: RiPresentationFill,
            title: 'Education',
            jobs: '60 Jobs'
        }
    ];

    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Services</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            {/* <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"> */}
                
            <Slider {...settings} className='mt-8 mb-8'>
                {Categories.map((item, index) => {
                    let Icon = item.icon
                    return(
                        <div className="group px-3 mx-5 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500 w-36 h-72" key={index} >
                            <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                                <Icon/>
                            </div>
    
                            <div className="content mt-6">
                                <Link to="#" className="title text-lg font-semibold hover:text-emerald-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.jobs}</p>
                                
                            </div>
                        </div>
                    )
                })}
                  </Slider>
            {/* </div> */}
        </div>
    )
}
