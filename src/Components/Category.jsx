import { NavLink } from "react-router-dom";
const Category = ({category}) => {
    // console.log(category);
   
    return (
        <div className="ml-5 mt-5">
          
         <NavLink  to={`./category/${category.category}`} className="btn btn-secondary">
         {category.category}
         </NavLink>
        
        </div>
    );
};

export default Category;