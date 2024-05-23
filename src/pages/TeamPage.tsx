import React from 'react';
import "../css/team.css";
import teamPhoto from '/images/exec/group_photo.jpeg';
const photos = import.meta.glob('/images/exec/*', {eager: true, as: 'url'});


const TeamPage: React.FC = () => {
  return (
    <div>
      <img src={teamPhoto} className="team-photo mt-2" alt="" />
      <div className="container" id="our-team">

        <div className="row">
          <div className="col-md-12 text-center mt-4 mb-5">
            <h2>Our Executive Team</h2>
          </div>
        </div>

        <div className="row">

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/AnnaYang.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Anna Yang</h3>
                <span>Co-President</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/JenniferZhang.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Jennifer Zhang</h3>
                <span>Co-President</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/AnushkaN.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Anushka Naiknaware</h3>
                <span>Secretary</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/RishabParthasarathy.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Rishab Parthasarathy</h3>
                <span>Treasurer</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/AlexisYi.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Alexis Yi</h3>
                <span>Treasurer</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/maskedTim.jpeg"]} alt="" />
              <div className="team-overlay">
                <h3>Anika Puri</h3>
                <span>Treasurer</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/LuciaWang.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Lucia Wang</h3>
                <span>Social Chair</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/EmilyChen.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Emily Chen</h3>
                <span>Social Chair</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/YiqingDu.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Yiqing Du</h3>
                <span>Publicity Chair</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/JessicaKim.jpeg"]} alt="" />
              <div className="team-overlay">
                <h3>Jessica Kim</h3>
                <span>Publicity Chair</span>
                <span>class of 2027</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/ElisaXia.png"]} alt="" />
              <div className="team-overlay">
                <h3>Elisa Xia</h3>
                <span>External Relations</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/cassandra.jpeg"]} alt="" />
              <div className="team-overlay">
                <h3>Cassandra He</h3>
                <span>External Relations</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/MargaretWang.png"]} alt="" />
              <div className="team-overlay">
                <h3>Margaret Wang</h3>
                <span>Faculty-Student Relations</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/JuliannaSchneider.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Julianna Schneider</h3>
                <span>Faculty-Student Relations</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/RohanBosworth.JPG"]} alt="" />
              <div className="team-overlay">
                <h3>Rohan Bosworth</h3>
                <span>Faculty-Student Relations</span>
                <span>class of 2027</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/JophyYe.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Jophy Ye</h3>
                <span>Webmaster</span>
                <span>class of 2027</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/AnanyaKulshrestha.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Ananya Kulshrestha</h3>
                <span>Webmaster</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/YilinLi.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Yilin Li</h3>
                <span>Historian</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/MaggieYao.png"]} alt="" />
              <div className="team-overlay">
                <h3>Maggie Yao</h3>
                <span>Historian</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/JustinBuonato.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Justin Buonato</h3>
                <span>Freshman Representative</span>
                <span>class of 2027</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/AmandaHulver.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Amanda Hulver</h3>
                <span>Freshman Representative</span>
                <span>class of 2027</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/sabrina_meng.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Sabrina Meng</h3>
                <span>WiEECS Co-President</span>
                <span>class of 2024</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/meenakshi_singh.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Meenakshi Singh</h3>
                <span>WiEECS Co-President</span>
                <span>class of 2023</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/maskedTim.jpeg"]} alt="" />
              <div className="team-overlay">
                <h3>Tammy Chen</h3>
                <span>URTC Co-chair</span>
                <span>class of 2024</span>
              </div>
            </div>            
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/EllieMontemayor.png"]} alt="" />
              <div className="team-overlay">
                <h3>Ellie Montemayor</h3>
                <span>URTC Co-chair</span>
                <span>class of 2026</span>
              </div>
            </div>
          </div>
          
          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/maskedTim.jpeg"]} alt="" />
              <div className="team-overlay">
                <h3>George liu</h3>
                <span>URTC Co-chair</span>
                <span>class of 2025</span>
              </div>
            </div>
          </div>

          <div className="team-member col-6 col-sm-4 col-md-3">
            <div className="member-thumb">
              <img src={photos["/images/exec/LasyaBalachandran.jpg"]} alt="" />
              <div className="team-overlay">
                <h3>Lasya Balachandran</h3>
                <span>URTC Co-Chair</span>
                <span>className of 2025</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamPage;
