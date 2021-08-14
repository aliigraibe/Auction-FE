import { Link } from "react-router-dom";

const CategoryItem = ({ category, setSelect }) => {
  setSelect(category);
  return (
    <div >
      <Link to={`/categories/${category.slug}`}>{category.name}</Link>
    </div>
  );
};

export default CategoryItem;
