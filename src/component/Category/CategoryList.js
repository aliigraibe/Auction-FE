import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const CategoryList = ({ setSelect }) => {
  const { loading, categories } = useSelector((state) => state.categories);
  if (loading) return <Loading />;
  const categoryList = categories.map((category) => (
    <CategoryItem setSelect={setSelect} category={category} key={category.id} />
  ));

  return (
    <div>
      <div>{categoryList}</div>
      <div></div>
    </div>
  );
};
export default CategoryList;
