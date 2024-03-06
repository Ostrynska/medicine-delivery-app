import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom"; // Імпортуйте Outlet з react-router-dom
import { fetchAllShops } from "../redux/shops/operations";

const Home = () => {
    const dispatch = useDispatch();
    const shops = useSelector(state => state.shops.items);

    useEffect(()=> {
        dispatch(fetchAllShops());
    }, [dispatch]);

    return (
        <main>
            <div style={{ display: "flex" }}>
                <div>
                    <h2>Shops</h2>
                    <ul>
                        {shops.map(({_id, name}) => (
                            <li key={_id}>
                                <NavLink to={`/shops/${_id}`}>{name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </main>
    );
};

export default Home;
