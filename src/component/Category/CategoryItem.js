import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <Link className="category1" to={`/categories/vehicles`}>
      Vehicles
      </Link>
      <Link className="category2" to={`/categories/Realstate`}>
      Realstate
      </Link>
      <Link className="category3" to={`/categories/Electronicsandtechnolgy`}>
      Technologies
      </Link> <Link className="category4" to={`/categories/fashion`}>
      Fashion
      </Link> <Link className="category5" to={`/categories/art`}>
      Art
      </Link> <Link className="category6" to={`/categories/other`}>
     Other
      </Link>

     

      
    </div>
  );
};

export default CategoryItem;
