import React, { useState } from 'react';
import ab01 from '../assets/images/about/ab01.jpg';
import ab02 from '../assets/images/about/ab02.jpg';
import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";
import { LuMail } from 'react-icons/lu';

export default function MillionsJob() {
    const [isOpen, setOpen] = useState(false);
    const headerStyle = {
        marginBottom: '80px',
        fontSize: '24px', // Increase the font size as needed
        marginLeft: '-250px',
        marginTop: '10px',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#3498db',
      };
      const headerStyle1 = {
        marginBottom: '50px',
        fontSize: '24px', // Increase the font size as needed,
        marginTop: '10px',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#3498db',
      };
    

      const mystle={
        marginBottom:'50px',
        fontWeight:'bold',
        fontSize:'15px'
      }
      const containerStyle = {
        backgroundColor: '#000', // Black background color
        padding: '20px', // Optionally, add other styles as needed
        color: '#fff', // White text color
      };

    return (
        <>
            {/* ModalVideo component */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            {/* Main Content */}
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                {/* Image Section */}
                <div className="lg:col-span-5 md:col-span-6">
                    <div className="relative">
                        <div className="relative">
                      <img
            src="https://pmmodiyojana.in/wp-content/uploads/2020/08/ghar-ghar-rojgar.jpg"
             className="ml-0 h-40 w-30"
             alt=""/>
                            {/* <img src={ab01} className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" /> */}
                            <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                                <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute md:-end-5 end-0 -bottom-16">


                           
                           {/*  */}
                            {/* <img src={ab02} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" /> */}
                        </div>



                    </div>
                </div>

                {/* Text Section */}
                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                    <div className="lg:ms-5">
                        {/* About Us Section */}
                        <h3  style={headerStyle}>About Punjab Ghar Ghar Rozgar and Karobar Mission (PGRKAM)</h3>
                        <p style={mystle}>
                            Punjab Cabinet Committee in its meeting dated 3.10.18 decided to establish Punjab Ghar Ghar Rozgar and Karobar Mission (PGRKAM) as well as get it registered as Society as per the Memorandum of Association (MoA) placed before the Cabinet Committee. PGRKAM was registered as Society on 25.10.18 under Societies Registration Act, 1860. To view the MoA of PGRKAM <Link to="#">click here</Link>.
                        </p>

                        {/* Millions of Jobs Section */}
                        <h3  style={headerStyle1}>Taking Initiatives to Build a Better Tomorrow</h3>

                           <p  style={mystle}>We are committed to making a positive impact on the community through our initiatives. Our team has taken significant steps towards building a transformative project that aims to create a better future for everyone.</p>

               {/* Initiatives List */}
               <ul  style={mystle} >
                <li className="mb-1">Punjab Job Helpline: Reaching out to every household to provide employment facilitation.</li>
                  <li className="mb-1">Online Coaching & Training: Offering free training and coaching to candidates seeking jobs in the government sector.</li>
                <li className="mb-1">Digital Platform Development: Building a full-fledged digital platform to connect all stakeholders in the department.</li>
                   <li className="mb-1">Social Media Utilization: Maximizing outreach to inform the public about the department's activities, initiatives, and services.</li>
                     <li className="mb-1">Foreign Study and Placement Cell (FS&PC): Facilitating the youth of Punjab in pursuing foreign study and fair placement opportunities.</li>
                </ul>

               <p style={mystle}>Together, we are shaping a project that aspires to make a meaningful and transparent impact on the lives of individuals in Punjab.</p>

                        {/* Contact Us Button */}
                        <div className="mt-6">
                            <Link to="/contact" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md inline-flex items-center">
                                <LuMail className='me-2' />
                                Contact us
                            </Link>
                            {/* Additional Contact Details */}
                            <div style={containerStyle}>
                                <p>E-mail - pgrkam.degt@gmail.com</p>
                                <p>Phone No - 01725011186, 01725011185, 01725011184</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}