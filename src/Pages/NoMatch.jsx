import { Link, useParams } from "react-router-dom";

function NoMatch() {
  const {id}=useParams()
  return (
    <>
      {" "}
      <h3>Product does not exist</h3>
      <Link to={`/products/${Number(1)}`}>Go Back</Link>
    </>
  );
}

export default NoMatch;
