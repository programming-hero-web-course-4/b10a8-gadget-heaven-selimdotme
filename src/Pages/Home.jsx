import { useState } from "react";
import Categoryes from "../Components/Categoryes";
import HomeTower from "./HomeTower";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Set default to null

   
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="lg:flex ">
                <div className="border max-w-[200px] rounded-lg mx-auto">
                    <Categoryes onSelectCategory={handleCategorySelect} />
                </div>

                <div className="flex-grow">
                    <HomeTower selectedCategory={selectedCategory} />
                </div>
            </div>
        </div>
    );
};

export default Home;
