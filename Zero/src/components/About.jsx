import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div className=' about bg-black-800 text-white'>
      <Header></Header>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-white-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              About the company
            </p>
          </div>
          <p className="text-3xl font-bold text-white-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-white-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
            quam ratione placeat?
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="w-full text-xl font-semibold text-white-900">
              Bengaluru office
            </p>
            <p className="w-full text-base text-white-700">Mon-Sat 9am to 5pm.</p>
            <p className="w-full text-sm text-white-500">
              292, 100 Feet Rd, Binnamangala, Hoysala Nagar, Indiranagar, Bengaluru,
              Karnataka 560038
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 12h18"></path>
              <path d="M3 6h18"></path>
              <path d="M3 18h18"></path>
            </svg>
            <p className="w-full text-xl font-semibold text-white-900">Email us</p>
            <p className="w-full text-base text-white-700">
              Monday to Friday Expected
            </p>
            <p className="w-full text-sm text-white-500">support@company.com</p>
          </div>
          <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4.01 12 14.01l-3-3"></path>
              <path d="M22 4.01 12 14.01l-3-3"></path>
              <path d="M2 20h20"></path>
            </svg>
            <p className="w-full text-xl font-semibold text-white-900">
              Submit a ticket
            </p>
            <p className="w-full text-base text-white-700">
              Response within 24 hours
            </p>
            <p className="w-full text-sm text-white-500">Company support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
