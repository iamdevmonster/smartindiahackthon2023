import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import Navbar from '../../components/Navbar';
import ExploreJob from '../../components/Explore-job';
import Footer from '../../components/Footer';

export default function Faqs() {
  const accordionData = [
    {
      title: 'How can I register on PGRKAM Portal?',
      content: [
        'Follow the steps below for registration on the PGRKAM Portal:',
        '1. Enter the portal link [PGRKAM Portal](http://pgrkam.com/) in the address bar of your browser.',
        '2. Click on **Register** at the top left and select **Jobseeker**.',
        '3. Read the instructions carefully and fill in all the mandatory fields with correct and valid mobile information.',
        '4.Fill the fields of the registration form, and then click on Submit'
      ],
    },
    {
      title: '. I am already registered in an employment exchange. Do I need to register again?',
      content: [
        'Follow the steps below for this on the PGRKAM Portal:',
        '1.Enter the url pgrkam.com in Address bar of browser:',
        '2.A pop-up modal appears, click on the button as highlighted, in the image below:',
        '3.If you enter wrong or un-registered mobile number, the error will be shown as below:',
        '4. If the correct mobile number is entered, an OTP is sent to registered mobile number.'
      ],
    },
    {
      title: '4. What is the eligibility criteria for registering on PGRKAM Portal?',
      content: [
        '1.Any resident of Punjab who is eligible to work can register on the portal.',
        '2.Age Should be  maore than 18 '

      ],
    },
    {
      title: 'How will I get a confirmation that I’m registered with PGRKAM?',
      content: [
       'After successful registration you will get an SMS, informing you of your successful registration opgrkam.com. The SMS will also contain username/password and OTP.',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGeneral, setGeneralIndex] = useState(0);
  const [activePayment, setPaymentIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const toggleGeneral = (index) => {
    if (activeGeneral === index) {
      setGeneralIndex(null);
    } else {
      setGeneralIndex(index);
    }
  };

  const togglePayment = (index) => {
    if (activePayment === index) {
      setPaymentIndex(null);
    } else {
      setPaymentIndex(index);
    }
  };

  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <section className="relative w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Frequently Asked Questions by Job Seeker AND employer</h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/index"></Link>
            </li>
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/helpcenter-overview">Helpcenter</Link>
            </li>
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">
              FAQs
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                <ul className="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                  <li className="navbar-item mt-3 p-0">
                    <Link2 to="general" spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">
                      FAQs For Employer
                    </Link2>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <Link2 to="payment" spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">
                      FAQs For Job Seeker
                    </Link2>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-7">
              <div id="general" className="mt-8">
                <h5 className="text-2xl font-semibold">General Questions</h5>
                <div id="accordion-collapsetwo" data-accordion="collapse" className="mt-6">
                  {accordionData.map((item, index) => (
                    <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                      <h2 className="text-base font-medium">
                        <button
                          onClick={() => toggleGeneral(index)}
                          type="button"
                          className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeGeneral === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `}
                          data-accordion-target={`#accordion-collapse-body-${index}`}
                          aria-expanded="true"
                          aria-controls={`accordion-collapse-body-${index}`}
                        >
                          <span>{item.title}</span>
                          <svg data-accordion-icon className={`w-4 h-4 shrink-0 ${activeGeneral === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </h2>
                      {activeGeneral === index && (
                        <div id={`accordion-collapse-body-${index}`} aria-labelledby={`accordion-collapse-heading-${index}`}>
                          <div className="p-5">
                            {item.content.map((step, i) => (
                              <p key={i} className="text-slate-400 dark:text-gray-400">{step}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div id="payment" className="mt-8">
                <h5 className="text-2xl font-semibold">Payments Questions</h5>
                <div id="accordion-collapsethree" data-accordion="collapse" className="mt-6">
                  {accordionData.map((item, index) => (
                    <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                      <h2 className="text-base font-medium">
                        <button
                          onClick={() => togglePayment(index)}
                          type="button"
                          className={`flex justify-between items-center p-5 w-full font-medium text-left ${activePayment === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `}
                          data-accordion-target={`#accordion-collapse-body-${index}`}
                          aria-expanded="true"
                          aria-controls={`accordion-collapse-body-${index}`}
                        >
                          <span>{item.title}</span>
                          <svg data-accordion-icon className={`w-4 h-4 shrink-0 ${activePayment === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </h2>
                      {activePayment === index && (
                        <div id={`accordion-collapse-body-${index}`} aria-labelledby={`accordion-collapse-heading-${index}`}>
                          <div className="p-5">
                            {item.content.map((step, i) => (
                              <p key={i} className="text-slate-400 dark:text-gray-400">{step}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ExploreJob />
      </section>

      <Footer />
    </>
  );
}