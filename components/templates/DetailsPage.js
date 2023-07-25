import styles from "./DetailsPage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage(props) {
    const {
        id,
        name,
        price,
        discount,
        introduction,
        details,
        ingredients,
        recipe,
    } = props;

    return (
        <div className={styles.container}>
            <h2>Details</h2>
            <div className={styles.banner}>
                <img src={`/images/${id}.jpeg`} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <span className={styles.location}>
                        <Location />
                        {details[0].Cuisine}
                    </span>
                    <span>
                        <Dollar />
                        {discount ? (price * (100 - discount)) / 100 : price}$
                    </span>
                    {discount ? (
                        <span className={styles.discount}>{discount}% OFF</span>
                    ) : null}
                </div>
            </div>
            <div className={styles.introduction}>{introduction}</div>

            <div className={styles.details}>
                <h4>Details</h4>
                <ul>
                    {details.map((item, index) => (
                        <li key={index}>
                            <p>{Object.keys(item)[0]}:</p>
                            <span>{Object.values(item)[0]}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.details}>
                <h4>Ingredients</h4>
                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index}>
                            <p>{item}:</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.recipe}>
                <h4>Recipe</h4>
                <ul>
                    {recipe.map((item, index) => (
                        <div className={index % 2 ? styles.odd : styles.even} key={index}>
                            <span>{index + 1}</span>
                            <p>{item}:</p>
                        </div>
                    ))}
                </ul>
            </div>
            <button children={styles.button}>Add to Cart</button>
        </div>
    );
}

export default DetailsPage;
