import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div >
      <h1 className="mb-4">Opps!!</h1>
      <Link className="bg-green-600 rounded-xl p-2" to="/">Go Back To Home</Link>
    </div>
  );
};

export default ErrorPage;