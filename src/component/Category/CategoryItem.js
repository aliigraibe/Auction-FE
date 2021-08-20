const CategoryItem = ({ category, setSelect }) => {
  // REVIEW: fix typo, handleSubmit
  const handelSubmet = () => {
    setSelect(category._id);
  };
  return (
    <button className="category1" onClick={handelSubmet}>
      {category.name}
    </button>
  );
};

export default CategoryItem;
