import { useSelector } from "react-redux";

import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  /**
   * @Octowl:
   *
   * I think you can combine these into a single selector:
   *
   * const {loading, categories} = useSelector(({categories}) => categories)
   */
  const loading = useSelector((state) => state.categories.loading);
  const categories = useSelector((state) => state.categories.categories);

  if (loading) return <p>loading...</p>;
  console.log(categories); // @Octowl: don't leave console logs in production code

  const categoryList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return <>{categoryList};</>;
};
export default CategoryList;
