// * fetch all users information here

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchUsers = () => {
    return axios.get("http://localhost:3000/products");
};

function Users() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleFetchUsers = async () => {
        try {
            setIsLoading(true);
            const list = await fetchUsers();
            setData(list);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        handleFetchUsers();
    }, []);
    if (isLoading) {
        return <div>...loading</div>;
    }
    return (
        <div>
            <h1>All Products Page</h1>
            <table style={{ border: "1px solid red", textAlign: "center" }}>
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>More Details</th>
                    </tr>
                    {data?.data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link className="details" to={`/products/${item.id}`}>Details</Link></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
