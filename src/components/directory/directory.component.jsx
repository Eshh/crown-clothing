import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((c) => (
        <CategoryItem key={c.id} category={c} />
      ))}
    </div>
  );
};

export default Directory;
