const CategoryItem = ({ category, setSelect }) => {
  const handelSubmet = () => {
    setSelect(category._id);
  };

  return <button onClick={handelSubmet}>{category.name}</button>;
};

export default CategoryItem;
