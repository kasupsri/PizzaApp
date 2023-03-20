import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="250" height="250" />
      </Link>
      {pizza.locationPrices.map((location) => {
        return (
          <span>
            {location.text} : ${location.price}
          </span>
        );
      })}
      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default ProductCard;
