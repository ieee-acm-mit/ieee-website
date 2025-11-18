import React from 'react';
import "../css/team.css";
import teamPhoto from '/images/exec/group_photo.jpg';
const photos = import.meta.glob('/images/exec/*', {eager: true, as: 'url'});


const execList = [
  {
    name: 'Rohan Bosworth',
    img: '/images/exec/RohanBosworth.JPG',
    role: 'President',
    class: 2027
  },
  {
    name: 'Jophy Ye',
    img: '/images/exec/JophyYe.jpg',
    role: 'President',
    class: 2027
  },
  {
    name: 'Cassandra Tafuri Del Vecchio',
    img: '/images/exec/CassandraTafuriDelVecchio.jpg',
    role: 'Secretary',
    class: 2028
  },
  {
    name: 'Srilekha Mamidala',
    img: '/images/exec/SrilekhaMamidala.jpg',
    role: 'Treasurer',
    class: 2028
  },
  {
    name: 'Rebecca Wang',
    img: '/images/exec/RebeccaWang.jpg',
    role: 'Treasurer',
    class: 2028
  },
  {
    name: 'Léo Kana',
    img: '/images/exec/LeoKana.jpg',
    role: 'Social Chair',
    class: 2028
  },
  {
    name: 'Arielsie Li',
    img: '/images/exec/ArielsieLi.jpg',
    role: 'Social Chair',
    class: 2028
  },
  {
    name: 'Trish Zheng',
    img: '/images/exec/TrishZheng.jpg',
    role: 'Publicity Chair',
    class: 2029
  },
  {
    name: 'Nikita Agrawal',
    img: '/images/exec/NikitaAgrawal.jpg',
    role: 'External Relations Chair',
    class: 2028
  },
  {
    name: 'Laurie Wang',
    img: '/images/exec/LaurieWang.jpg',
    role: 'External Relations Chair',
    class: 2028
  },
  {
    name: 'Jocelyn Zhang',
    img: '/images/exec/JocelynZhang.jpg',
    role: 'External Relations Chair',
    class: 2028
  },
  {
    name: 'Jessica Kim',
    img: '/images/exec/JessicaKim.jpg',
    role: 'Faculty Student Relations Chair',
    class: 2027
  },
  {
    name: 'Elyse Moores',
    img: '/images/exec/ElyseMoores.jpg',
    role: 'Faculty Student Relations Chair',
    class: 2028
  },
  {
    name: 'Jonas Sun',
    img: '/images/exec/JonasSun.jpg',
    role: 'Faculty Student Relations Chair',
    class: 2029
  },
  {
    name: 'Amanda Hulver',
    img: '/images/exec/AmandaHulver.jpg',
    role: 'Historian',
    class: 2027
  },
  {
    name: 'Rojina Adhikari',
    img: '/images/exec/RojinaAdhikari.jpg',
    role: 'Freshmen Representative',
    class: 2029
  },
  {
    name: 'Maggie Zhang',
    img: '/images/exec/MaggieZhang.jpg',
    role: 'Freshmen Representative',
    class: 2029
  },
  {
    name: 'Megan Campbell',
    img: '/images/exec/MeganCampbell.jpg',
    role: 'Freshmen Representative',
    class: 2029
  },
  {
    name: 'Robert Chondro',
    img: '/images/exec/RobertChondro.jpg',
    role: 'Webmaster',
    class: 2029
  },
]


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
          {execList.map((exec) => (
            <div className="team-member col-6 col-sm-4 col-md-3">
              <div className="member-thumb">
                <img src={photos[exec.img]} alt="" />
                <div className="team-overlay">
                  <h3><big>{exec.name}</big></h3>
                  <span>{exec.role}</span>
                  <span>class of {exec.class}</span>
                </div>
              </div>
            </div>
          ))}

          {/* TODO: update the following
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
          </div>*/}
        </div>

      </div>
    </div>
  );
};

export default TeamPage;
