import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/tidor.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="ontoy">

  <div className="container mt-5">
    <div className="row">
      <div className="col">

      <div id="about">
        <div className="container">
      
            <div className="card shadow p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p className="text-black"> Hello! My name is Cris Makilan, and I am a passionate IT Student with a strong background in Information Technology. I hold a Bachelor of Science in Information Technology from Central Philippines State University.  My journey in IT has been fueled by a love for solving complex problems and staying updated with the latest technological advancements. I am always eager to take on new challenges and learn new technologies. Feel free to explore my portfolio to see some of my work, and don't hesitate to reach out if you'd like to collaborate!  </p>
          
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic</span> </h4>
              <p className="text-black"> Primary: Tampalon Elementary School S.Y:2009 <br /> Secondary: Junior High: Tampalon National High School S.Y:2014 <br />Tretiary: Central Philippines State University (CPSU)SY:2024</p>
              <p> </p>
                </div>
              </div>
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

export default About;
