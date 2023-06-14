
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../Home/Banner";
import { Services } from "../Home/Servces";
import { Projects } from "../Home/Projects";
import { Contact } from "../Home/Contact";



function Home() {
  return (
    <div className="App">
        < Banner />
        < Services />
        < Projects />
        < Contact />
    </div>
  );
}

export default Home;
