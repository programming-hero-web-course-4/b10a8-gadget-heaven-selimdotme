import { useState, useEffect } from "react";
import Gadget from "../Components/Gadget";

const HomeTow = ({ selectedCategory }) => {
    const [data, setData] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        fetch('../Gadgets.json')
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData));
    }, []);

    useEffect(() => {
        if (selectedCategory === "All Products") {
            setFilteredCategories(data);
        } else if (selectedCategory) {
            const filteredByCategory = data.filter(
                item => item.category === selectedCategory
            );
            setFilteredCategories(filteredByCategory);
        } else {
            setFilteredCategories(data.slice(0, 9));
        }
    }, [data, selectedCategory]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1 ">

            {filteredCategories.length === 0 ? (
                <div className="col-span-3 text-center text-xl font-bold text-red-500 ">
                    <p className="ml-20">
                        <img src="https://i.ibb.co.com/M8Nv2JJ/stock-vector-out-of-stock-product-not-available-sold-out-icon-label-sign-design-vector-2110563425-re.png" alt="" />
                    </p>
                </div>
            ) : (
                filteredCategories.map(gadget => (
                    <Gadget key={gadget.product_id} gadget={gadget} />
                ))
            )}
        </div>
    );
};

export default HomeTow;
