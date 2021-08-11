import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const loading = useSelector((state) => state.categories.loading);
  const categories = useSelector((state) => state.categories.categories);
  if (loading)
  return <p>loading...</p>
  console.log(categories)
  const categoryList = categories
 .map((category) => (
      <CategoryItem category={category} key={category.id} />
    )
  );
  
  return <>{categoryList};</>;
};
export default CategoryList;
