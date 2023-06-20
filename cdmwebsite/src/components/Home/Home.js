
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../Home/Banner";
import {MyCarousel} from "../Home/Servces";
import { Projects } from "../Home/Projects";
import { Contact } from "../Home/Contact";
import Newsletter from './Newsletter';


function Home() {
  return (
    <div className="App">
        < Banner />
      <MyCarousel />
        < Projects />
        < Contact />
        <Newsletter />
    </div>
  );
}

export default Home;
