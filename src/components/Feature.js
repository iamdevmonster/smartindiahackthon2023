import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForward } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaAtom } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { AiOutlineHourglass } from 'react-icons/ai';

export default function Feature() {
    const featuredata = [
        {
            icon: BsTelephone,
            title: '24/7 Support by Punjab Government',
            data: 'Get assistance from the Punjab government anytime, anywhere.',
        },
        {
            icon: FaAtom,
            title: 'Punjab Government Tech & Startup Jobs',
            data: 'Explore exciting opportunities in the tech and startup sector with support from the Punjab government.',
        },
        {
            icon: FiUserPlus,
            title: 'Quick & Easy with Punjab Government Assistance',
            data: 'Experience a quick and easy process with additional support from the Punjab government.',
        },
        {
            icon: AiOutlineHourglass,
            title: 'Save Time with Punjab Government Support',
            data: 'Save valuable time on your job search journey with assistance from the Punjab government.',
        },
    ];

    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                    Here you can get a lot of Features
                </h3>

                <p className="text-slate-400 max-w-xl mx-auto text-lg text-emerald-600">
                    Discover available job positions in Punjab, explore personalized salary estimates, and access valuable
                    insights about employment opportunities. Access information on numerous government openings and
                    enhance your career.
                </p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {featuredata.map((item, index) => {
                    let Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500"
                        >
                            <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                                <Icon className="text-[30px] text-emerald-600 group-hover:text-white" />
                            </div>

                            <div className="mt-4">
                                <Link to="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">
                                    {item.title}
                                </Link>

                                <p className="text-slate-400 mt-3 mb-2">{item.data}</p>

                                <Link to="#" className="hover:text-emerald-600 font-medium transition-all duration-500 inline-flex items-center">
                                    Read More <MdOutlineArrowForward className="ms-1" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}