import { Link } from 'react-router-dom';
import logo from './logo.png';
import usmlogo from './usmlogo.png'; 
import cslogo from './cs-school.png'; 

const Footer = () => {
    return (
    <footer className="bg-footer text-center text-neutral-600 lg:text-left">
        
      <div className="mx-6 py-4 text-left md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-4 lg:grid-cols-4">
          {/* <!-- Logo --> */}
          <div className="flex justify-start items-center md:justify-center">
            <a href='https://cssocietyusm.com/'>
                <img src={logo} alt="csslogo" className='w-24 hover:scale-105 transition duration-300'></img>
            </a>
          </div>
          {/* <!-- Navigate --> */}
          <div className="">
            <h6
              className="mb-2 flex justify-start font-semibold uppercase">
              Navigate
            </h6>
            <p className="mb-2">
              <a href='https://cssocietyusm.com/about/' className="text-black"
              >About us</a>
            </p>
            <p className="mb-2">
                <Link to="/events" className="text-black">Events</Link>
            </p>
            <p className="mb-2">
              <a className="text-black"
              >News</a>
            </p>
          </div>
          {/* <!-- Social --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-start font-semibold uppercase">
              Social
            </h6>
            {/* <!-- Social network icons container --> */}
            <div className="flex justify-left">
            <a className="mr-6 text-neutral-600 cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            </a>
            <a className="mr-6 text-neutral-600 cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </a>
            <a className="mr-6 text-neutral-600 cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-4 w-4"
                >
                <path
                fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
                </svg>
            </a>
            <a className="mr-6 text-neutral-600 cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            </a>
            <a className="mr-6 text-neutral-600 cursor-pointer">
                <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.41421",
                }}
                >
                <path
                id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                />
                </svg>
            </a>
            </div>
          </div>
          {/* <!-- USM CS --> */}
          <div className="justify-start items-center md:justify-center">
            <a href='https://cs.usm.my'><img src={cslogo} alt="cs official website" className='w-36 pb-2 hover:scale-105 transition duration-300'></img></a>
            <a href='https://usm.my'><img src={usmlogo} alt="usm official website" className='w-52 hover:scale-105 transition duration-300'></img></a>
            </div>
        </div>
      </div>

        {/* <!--Copyright section--> */}
            <div className="bg-secondary p-4 text-center text-neutral-700">
                © 2022 - 2023 Computer Science Society, University Sains Malaysia
            </div>
        </footer>
    )
}
        
        
export default Footer;