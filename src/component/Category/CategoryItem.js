const CategoryItem = ({ category, setSelect }) => {
  const handleSubmit = () => {
    setSelect(category._id);
  };
  return (
    <button className="category1" onClick={handleSubmit}>
      {category.name}
    </button>
  );
};

export default CategoryItem;
