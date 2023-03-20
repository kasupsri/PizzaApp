import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Looking for the best pizza in town? Look no further than our pizzeria!
      </h1>
      <p className={styles.desc}>
        We are dedicated to creating the most delicious and satisfying pizzas
        for our customers. Our pizzas are made with only the freshest and
        highest-quality ingredients, ensuring each bite is bursting with flavor.
        From classic pepperoni to our unique and creative toppings, every pizza
        is expertly crafted and baked to perfection. Our crispy crust and
        mouth-watering cheese will have you coming back for more. But don't just
        take our word for it, come and try it for yourself! Our friendly staff
        and cozy atmosphere will make your dining experience one to remember. So
        why settle for average pizza when you can have the best? Come visit us
        today and taste the difference!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <ProductCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
