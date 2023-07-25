import styles from "./CategoriesPage.module.css"
import Card from "../modules/Card";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"

function CategoriesPage({ data }) {

    const [query, setQuery] = useState({ difficulty: "", time: "" })
    const router = useRouter();

    useEffect(() => {
        const { difficulty, time } = router.query;
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({ difficulty, time });
        }
    }, []);

    const changeHandler = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value })
    };

    const searchHandler = () => {
        router.push({
            pathname: "/categories",
            query
        })
    }


    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select value={query.difficulty} name="difficulty" onChange={changeHandler}>
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select value={query.time} name="time" onChange={changeHandler}>
                        <option value="">Cooking Time</option>
                        <option value="more">More than 30 min</option>
                        <option value="less">Less than 30 min</option>
                    </select>
                    <button onClick={searchHandler}>Search</button>
                </div>
                <div className={styles.cards}>
                    {data.length ? (
                        data.map((item) => (
                            <Card key={item.id} {...item} />
                        ))
                    ) : <img src="/images/search.png" alt="Category" />}

                </div>

            </div>


        </div>
    )
}

export default CategoriesPage