import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryList = ({ setSelect }) => {
  const loading = useSelector((state) => state.categories.loading);
  const categories = useSelector((state) => state.categories.categories);
  if (loading) return <p>loading...</p>;
  const categoryList = categories.map((category) => (
    <CategoryItem setSelect={setSelect} category={category} key={category.id} />
  ));

  return <div className="centered">{categoryList}</div>;
};
export default CategoryList;
