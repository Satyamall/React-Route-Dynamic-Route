import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const getUserById = (id) => {
  return axios.get("http://localhost:3000/products/" + id);
};

// HOOkS
function ProductDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const isMounted = useRef(null);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      const list = await getUserById(id);
      if (!isMounted.current) {
        return;
      }
      setData(list);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUser();
    if (!isMounted.current) {
      isMounted.current = true;
    }
    return () => {
      // * cleanup
      isMounted.current = false;
    };
  },[id]);

  if (isLoading)
  {
    return( 
        <div>
            <div>...loading</div>
            <Link to="/nomatch">No Match</Link>
        </div>
        );
  } 
  return (
    <div style={{textAlign: "center"}}>
      <div style={{border: "1px solid black", padding: 10,marginTop: 20,background: "whitesmoke"}}>
          <h3> User ID: {id} </h3>
          <h3>Name of Product: {data?.data.name}</h3>
          <h3>Name of Product: {data?.data.price}</h3>
      </div>
      <div style={{marginTop: 20}}>
      {
        id !== "1"&& <Link className="page" to={`/products/${Number(id) - 1}`}>Prev</Link>
      }
      <Link className="page" to={`/products/${Number(id) + 1}`}>Next</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
