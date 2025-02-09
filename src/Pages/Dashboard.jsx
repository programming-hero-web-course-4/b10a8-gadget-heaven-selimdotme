import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { MdDeleteForever } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import Heading from "../Components/Heading";
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

const Dashboard = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem("wishlistItems")) || []);
    const [showCart, setShowCart] = useState(true);
    const [sortedByPrice, setSortedByPrice] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); 
    const navigate = useNavigate(); 

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const sortCartByPriceDescending = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
        setCartItems(sortedItems);
        setSortedByPrice(true);
        toast.info("Cart sorted by price!"); 
    };

    const handleDeleteFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.product_id !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const handleDeleteFromWishlist = (productId) => {
        const updatedWishlistItems = wishlistItems.filter(item => item.product_id !== productId);
        setWishlistItems(updatedWishlistItems);
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
    };

    const handlePurchase = () => {
        toast.success("Purchase Successful!");  
        setCartItems([]); 
        setWishlistItems([]); 
        localStorage.setItem("cartItems", JSON.stringify([])); 
        localStorage.setItem("wishlistItems", JSON.stringify([]));
        setIsModalVisible(true); 
    };

    const handleCloseModal = () => {
        setIsModalVisible(false); 
        navigate("/"); 
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div>
                <div className="flex flex-col justify-center items-center bg-[#9538E2] rounded-lg h-[280px]">
                    <div className="mx-auto text-center text-white mb-5">
                        <Heading title="Dashboard" para="The GadgetHeaven dashboard provides you with an overview of your e-commerce platform's performance. Here, you can track sales, manage products, and update your store settings......." />
                    </div>
                    <div>
                        <button className="text-white border py-[3px] px-7 rounded-lg mr-10 font-extrabold" onClick={() => setShowCart(true)}>Cart</button>
                        <button className="text-white border py-[3px] px-7 rounded-lg font-extrabold" onClick={() => setShowCart(false)}>Wishlist</button>
                    </div>
                </div>

                <div className="flex justify-between space-x-5 mt-10">
                    <div className="text-lg font-bold text-[#9538E2]">
                        <h3>{showCart ? "Cart" : "Wishlist"}</h3>
                    </div>
                    {showCart && (
                        <div className="flex space-x-5">
                            <h1 className="flex py-[2px] px-3 items-center ml-3 text-lg font-bold border rounded-lg border-l-[#9538E2] border-r-[#9538E2] text-[#9538E2]">
                                Total Cost: ${calculateTotalCost().toFixed(2)}
                            </h1>
                            <div>
                                <button
                                    className="py-[2px] px-3 items-center ml-3 text-lg font-bold border rounded-lg border-[#9538E2] text-[#9538E2]"
                                    onClick={sortCartByPriceDescending}>Sort by Price</button>
                                <button
                                    className="py-[2px] px-3 items-center ml-3 text-lg font-bold border rounded-lg border-[#9538E2] text-[#9538E2]"
                                    onClick={handlePurchase}>Purchase</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10 mt-5">
                {showCart ? (
                    cartItems.length === 0 ? (
                        <p className="flex justify-center px-5 py-[2px] rounded-lg border border-r-[#9538E2] border-l-[#9538E2] mx-auto text-red-400 font-bold text-xl text-center mb-10">No items in the cart</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.product_id} className="flex space-x-5">
                                <div className="w-full">
                                    <div className="border py-[20px] rounded-lg px-10 shadow-lg flex justify-between">
                                        <div className="flex">
                                            <div>
                                                <img src={item.product_image} alt={item.product_title} className="w-[200px] h-[124px]" />
                                            </div>
                                            <div className="flex flex-col justify-center ml-7">
                                                <h4 className="font-bold">{item.product_title}</h4>
                                                <p className="font-semibold">Price: ${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <button onClick={() => handleDeleteFromCart(item.product_id)}>
                                                <MdDeleteForever className="text-2xl text-red-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    wishlistItems.length === 0 ? (
                        <p className="flex justify-center px-5 py-[2px] rounded-lg border border-r-[#9538E2] border-l-[#9538E2] mx-auto text-red-400 font-bold text-xl text-center mb-10">No items in the wishlist</p>
                    ) : (
                        wishlistItems.map(item => (
                            <div key={item.product_id} className="flex space-x-5">
                                <img src={item.product_image} alt={item.product_title} className="w-20 h-20" />
                                <div>
                                    <h4>{item.product_title}</h4>
                                    <p>Price: ${item.price}</p>
                                    <button onClick={() => handleDeleteFromWishlist(item.product_id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    )
                )}
            </div>

            {/* Modal */}
            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-10 rounded-lg text-center">
                        <h2 className="text-xl font-bold mb-5">Congratulations!</h2>
                        <p className="flex justify-center" ><img src="https://i.ibb.co.com/4tD59cy/Group.png" alt="" /></p>
                        <p>Your purchase was successful.</p>
                        <button
                            className="mt-5 py-2 px-4 bg-[#9538E2] text-white rounded-lg"
                            onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}

          
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
