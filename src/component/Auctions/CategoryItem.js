const CategoryItem = ({ category }) => {
  return (
    <div>
      <img width="10%" src={category.image} />
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryItem;
