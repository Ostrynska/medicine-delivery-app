import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDrugs } from "../redux/shops/operations";
import { addToCart } from "../redux/cart/slice";

const DrugsList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDrugs(id));
    }, [dispatch, id]);

    const drugs = useSelector(state => state.shops.drugsList);
  
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div>
            <h2>Medicines</h2>
            <ul>
                {drugs.map(({ name, photo, description, price }, index) => (
                    <li key={index}>
                        <h3 style={{ textTransform: 'capitalize' }}>{name}</h3>
                        <img src={photo} alt={name} width={300} height={250}/>
                        <p>{description}</p>
                        <p>{price}</p>
                        <button onClick={() => handleAddToCart({ name, photo, description, price })}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DrugsList;
