
const Footer = () => {
    return (

        <div>
            <div className="flex w-[60%] mx-auto rounded-xl p-5 flex-col justify-center text-center mb-14 mt-14 border">
                <h2 className="text-2xl font-black">Gadget Heaven</h2>
                <p className="text-sm font-light">Leading the way in cutting-edge technology and innovation.</p>
            </div>
             <hr />
            <footer className="footer gird md:grid-cols-3 bg-white text-neutral-content p-10  ">
                <nav className=" pl-5 md:ml-24">
                    <h6 className=" text-[#000000] footer-title">Services</h6>

                    <a  className="text-[#5c5874] link link-hover">Product Support</a>
                    <a  className="text-[#5c5874] link link-hover">Shipping & Delivery</a>
                    <a  className="text-[#5c5874] link link-hover">Order Tracking</a>
                    <a  className="text-[#5c5874] link link-hover">Returns</a>

                </nav>
                
                <nav className=" pl-5 md:ml-24">
                    <h6 className=" text-[#000000] footer-title">Company</h6>
                    <a className=" text-[#5c5874] link link-hover">About us</a>
                    <a className=" text-[#5c5874] link link-hover">Contact</a>
                    <a className=" text-[#5c5874] link link-hover">Careers</a>

                </nav>

                <nav className=" pl-5 md:ml-24">
                    <h6 className=" text-[#000000] footer-title">Legal</h6>
                    <a className=" text-[#5c5874] link link-hover">Terms of Service</a>
                    <a className=" text-[#5c5874] link link-hover">Privacy Policy</a>
                    <a className=" text-[#5c5874] link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;