import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((c) => (
        <DirectoryItem key={c.id} category={c} />
      ))}
    </div>
  );
};

export default Directory;
