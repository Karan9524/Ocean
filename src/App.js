import Clients from './Components/Clients';
import Footer from './Components/Footer';
import HeadPage from './Components/HeadPage';
import HowItWorks from './Components/HowItWorks';
import Journey from './Components/Journey';
import NewAtOcean from './Components/NewAtOcean';
import { StudentsSaying } from './Components/StudentsSaying';
import StudentsWorkAt from './Components/StudentsWorkAt';
import { Trending } from './Components/Trending';


function App() {
  return (
    <>
      <HeadPage />
      <Journey />
      <Trending />
      <StudentsWorkAt />
      <StudentsSaying />
      <Clients />
      <NewAtOcean />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
