import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <Link to={`/categories/${category._id}`}>
        {" "}
        <img width="10%" src={category.image} />
      </Link>
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryItem;
