import React from 'react';
import {  BsFacebook, FaDribbble, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer  className="relative bg-gray-900 pt-8 pb-6 mt-5">
      <div  className="container mx-auto px-4">
        <div  className="flex flex-wrap text-left lg:text-left">
          <div  className="w-full lg:w-6/12 px-4">
            <h4  className="text-3xl fonat-semibold  text-blue-400">
              Let's keep in touch!
            </h4>
            <h5  className="text-lg mt-0 mb-2 text-blue-500">
              Find us on any of these platforms, we respond within 1-2 working days.
            </h5>
            <div  className="mt-6 lg:mb-0 mb-6">
              <button
                 className="bg-white text-xl text-sky-400 shadow-lg font-normal   items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter></FaTwitter>
                
              </button>
              <button
                 className="bg-white text-blue-600 text-xl shadow-lg font-normal   items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                
                <FaFacebook></FaFacebook>
              </button>
              <button
                 className="bg-white text-pink-400 text-xl shadow-lg font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaDribbble></FaDribbble>
                
              </button>
              <button
                 className="bg-white text-green-700 text-xl shadow-lg font-normal   items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaWhatsapp></FaWhatsapp>
               
              </button>
            </div>
          </div>
          <div  className="w-full lg:w-6/12 px-4">
            <div  className="flex flex-wrap items-top mb-6">
              <div  className="w-full lg:w-4/12 px-4 ml-auto">
                <span  className="block uppercase text-blue-300 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul  className="list-unstyled">
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.everydayhealth.com/fitness/all-articles/"
                    >
                      Every Day Fitness
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.sweatfxbg.com/"
                    >
                       Sweat FXBG
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://kidshealth.org/en/teens/exercise-wise.html"
                    >
                      Kids Health
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.alygrayfitness.com/"
                    >
                      Aly Gray Fitness
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.sweat.com/blogs/fitness/questions-every-fitness-beginner-asks"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div  className="w-full lg:w-4/12 px-4">
                <span  className="block uppercase text-blue-300 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul  className="list-unstyled">
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.kutuby.com/?gclid=Cj0KCQjwteOaBhDuARIsADBqReiWDllixtvnz3SiBjOrQZAE5oVC8bHCT0_PuoIr8dTotHOoBccfeAAaAupQEALw_wcB"
                    >
                      Kids Quran Learning
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.thebritishacademy.ac.uk/blog/what-is-islamic-studies/?gclid=Cj0KCQjwteOaBhDuARIsADBqReijcTkazuKLA5LPHpkbejjnjJuHpIJrkWhgo4am6rOWTWwZrciHyeAaArOzEALw_wcB"
                    >
                      Islamic Blog
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.nwdawah.org/?utm_source=google&utm_medium=cpc"
                    >
                      Explore Quran
                    </a>
                  </li>
                  <li>
                    <a
                       className="text-blue-500 hover:text-white font-semibold block pb-2 text-sm"
                      href="https://www.islamicbooksforfree.com/"
                    >
                      Books store
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr  className="my-6 border-blueGray-300" />
        <div  className="flex flex-wrap items-center md:justify-between justify-center">
          <div  className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div  className="text-sm text-blue-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2022</span>
              <a
                href="https://www.facebook.com/AbuSuraj112"
                 className="text-blueGray-500 hover:text-white"
                target="_blank"
              >
                {" "}
                 by
                <a
                  href="https://github.com/AbuSuraj"
                   className="text-blueGray-500 hover:text-white"
                >
                  {" "}
                  Ruhi's Fitness Care
                </a>{" "}              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;