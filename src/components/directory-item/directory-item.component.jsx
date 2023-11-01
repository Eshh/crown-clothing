import "./directory-item.styles.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link to={"shop/" + title} className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;
