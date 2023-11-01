import { useContext } from "react";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product, product: { imageUrl, name, price } }) => {
  const { addToCart } = useContext(CartContext);

  const addProduct = () => {
    addToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
