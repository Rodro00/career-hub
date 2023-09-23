import Catagories from "../Root/Catagories/Catagories";
import Banner from "../Root/Header/Banner/Banner";
import Featured from "./FeaturesJob/Featured";



const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Catagories></Catagories>
     <Featured></Featured>
    </div>
  );
};

export default Home;