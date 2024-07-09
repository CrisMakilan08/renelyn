import "./Experience.css";
import Navbar from "./Navbar";
import PC2Image from "./img/makilan.png"
import PC1Image from "./img/makilan1.png"
import PC3Image from "./img/makilan3.png"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
              <div className="exp">
              <div className="container">
              <hr/>
          <div className="row mb-5">
            <h3 className="text-center">My On-the Job Training in DAR</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={PC1Image} />
          <h4 className="three text-black">Gathering the Data Information</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={PC2Image} />
          <h4 className="three text-black">Making a Alphabet Order </h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={PC3Image} />
          <h4 className="three text-black">Cooking Fish </h4>
          </div>
          </div>  
        </div>
        </div>
    </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Experience;
