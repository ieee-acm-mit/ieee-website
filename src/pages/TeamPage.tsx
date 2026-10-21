import React from 'react';
import "../css/team.css";
import teamPhoto from '/images/exec/group_photo.jpg';
const photos = import.meta.glob('/images/exec/*', {eager: true, as: 'url'});


const execList = [
  {
    name: 'Elyse Moores',
    img: '/images/exec/ElyseMoores.jpg',
    role: 'President',
    class: 2028
  },
  {
    name: 'Léo Kana',
    img: '/images/exec/LeoKana.jpg',
    role: 'President',
    class: 2028
  },
  {
    name: 'Nikita Agrawal',
    img: '/images/exec/NikitaAgrawal.jpg',
    role: 'Treasurer',
    class: 2028
  },
  {
    name: 'Sze Wing Wong',
    img: '/images/exec/SusilaWong.png',
    role: 'Treasurer',
    class: 2029
  },
  {
    name: 'Laurie Wang',
    img: '/images/exec/LaurieWang.jpg',
    role: 'External Relations Chair',
    class: 2028
  },
  {
    name: 'Rojina Adhikari',
    img: '/images/exec/RojinaAdhikari.jpg',
    role: 'External Relations Chair',
    class: 2029
  },
  {
    name: 'Andrea Yang',
    img: '/images/exec/AndreaYang.jpg',
    role: 'External Relations Chair',
    class: 2030
  },
  {
    name: 'Dhriti Ramesh',
    img: '/images/exec/DhritiRamesh.png',
    role: 'External Relations Chair',
    class: 2030
  },
  {
    name: 'Jonas Sun',
    img: '/images/exec/JonasSun.jpg',
    role: 'Faculty Student Relations Chair',
    class: 2029
  },
  {
    name: 'Megan Campbell',
    img: '/images/exec/MeganCampbell.jpg',
    role: 'Faculty Student Relations Chair',
    class: 2029
  },
  {
    name: 'Sai Patel',
    img: '/images/exec/generic_profile_pic.jpg',
    role: 'Faculty Student Relations Chair',
    class: 2030
  },
  {
    name: 'Amalia Ullman',
    img: '/images/exec/generic_profile_pic.jpg',
    role: 'Freshman Representative',
    class: 2030
  },
  {
    name: 'Aleks Lillis',
    img: '/images/exec/generic_profile_pic.jpg',
    role: 'Freshman Representative',
    class: 2030
  },
  {
    name: 'Anfal Hosen',
    img: '/images/exec/AnfalHosen.jpg',
    role: 'Secretary',
    class: 2029
  },
  {
    name: 'Kyra Cui',
    img: '/images/exec/generic_profile_pic.jpg',
    role: 'Social Chair',
    class: 2029
  },
  {
    name: 'Johan Hernandez',
    img: '/images/exec/JohanHernandez.jpeg',
    role: 'Social Chair',
    class: 2030
  },
  {
    name: 'Michelle Ge',
    img: '/images/exec/MichelleGe.png',
    role: 'Social-Outreach Chair',
    class: 2030
  },
  {
    name: 'Cindy Wang',
    img: '/images/exec/CindyWang.png',
    role: 'Social-Outreach Chair',
    class: 2030
  },
  {
    name: 'Megna Pillarisetti',
    img: '/images/exec/generic_profile_pic.jpg',
    role: 'Publicity Chair / Historian',
    class: 2029
  },
  {
    name: 'Brandon Cui',
    img: '/images/exec/BrandonCui.jpeg',
    role: 'Webmaster',
    class: 2030
  },
  {
    name: 'Aarushi Mehrotra',
    img: '/images/exec/AarushiMehrotra.jpg',
    role: 'Webmaster',
    class: 2030
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
