import React from "react";
import "./School.css";
import NoImage from "../../assets/images/no-image.png"; // Placeholder image
import accicon from "../../assets/images/account-icon.png";
import BCSTHS from "../../assets/images/BCST-HS.png";
import BCSHSSAC from "../../assets/images/BCSHS-SAC.png";
import BCSHSSTC from "../../assets/images/BCSHS-STC.png";
import BCSHSTC from "../../assets/images/BCSHS-TC.png";
import BCSHSWC from "../../assets/images/BCSHS-WC.png";
import BES from "../../assets/images/BES.png";
import BINHS from "../../assets/images/BINHS.png";
import BSSAA from "../../assets/images/BSSAA.png";
import CES from "../../assets/images/CES.png";
import DPESM from "../../assets/images/DPES-Main.png";
import DPNHS from "../../assets/images/DPNHS.png";
import DPESW from "../../assets/images/DPES-West.png";
import DJTMES from "../../assets/images/DJTMES.png";
import DMZBMES from "../../assets/images/DMZBMES.png";
import GES from "../../assets/images/GES.png";
import JZGMNHS from "../../assets/images/JZGMNHS.png";
import LES from "../../assets/images/LES.png";
import LES2 from "../../assets/images/LES2.png";
import MEES from "../../assets/images/MEES.png";
import MES from "../../assets/images/MES.png";
import MES2 from "../../assets/images/MES2.png";
import MNHS from "../../assets/images/MNHS.png";
import NRJNHS from "../../assets/images/NRJ-NHS.png";
import OLES from "../../assets/images/OLES.png";
import PES from "../../assets/images/PES.png";
import PHEMS from "../../assets/images/PHEMS.png";
import PENP from "../../assets/images/PENP.png";
import SAIS from "../../assets/images/SAIS.png"
import SFNHS from "../../assets/images/SFNHS.png";
import SFES from "../../assets/images/SFES.png";
import SVES from "../../assets/images/SVES.png";
import SSES from "../../assets/images/SSES.png";
import S5ES from "../../assets/images/S5ES.png";
import S5AES from "../../assets/images/S5AES.png";
import S5AINHS from "../../assets/images/S5AINHS.png";
import STES from "../../assets/images/STES.png";
import TES from "../../assets/images/TES.png";
import TATMES from "../../assets/images/TATMES.png";
import TES2 from "../../assets/images/TES2.png";
import ZES from "../../assets/images/ZES.png";

export const School = () => {
  const schools = [
    { 
      name: "Biñan City Science & Technology High School", 
      accounts: 0,
      logo: BCSTHS,         
      accountIcon: accicon,
      NoImage:NoImage   
    },
    { 
      name: "Biñan City Senior High School-San Antonio Campus", 
      accounts: 0,
      logo: BCSHSSAC,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Biñan City Senior High School-Sto.Tomas Campus", 
      accounts: 0,
      logo: BCSHSSTC,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Biñan City Senior High School-Timbao Campus", 
      accounts: 0,
      logo: BCSHSTC,
      accountIcon: accicon,
      NoImage:NoImage
    },
    { 
      name: "Biñan City Senior High School-West Campus", 
      accounts: 0,
      logo: BCSHSWC,
      accountIcon: accicon,
      NoImage:NoImage     
    },
    { 
      name: "Biñan Elementary School", 
      accounts: 0,
      logo: BES,
      accountIcon: accicon,
      NoImage:NoImage     
    },
    { 
      name: "Binan Integrated National High School", 
      accounts: 0,
      logo: BINHS,
      accountIcon: accicon,
      NoImage:NoImage     
    },
    { 
      name: "Binan Secondary School of Applied Academics", 
      accounts: 0,
      logo: BSSAA,
      accountIcon: accicon, 
      NoImage: NoImage 
    },
    { 
      name: "Canlalay Elementary School", 
      accounts: 0,
      logo: CES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Dela Paz Main Elementary School", 
      accounts: 0,
      logo: DPESM,
      accountIcon: accicon,
      NoImage:NoImage     
    },
    { 
      name: "Dela Paz National High School", 
      accounts: 0,
      logo: DPNHS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Dela Paz West Elementary School", 
      accounts: 0,
      logo: DPESW,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Dr. Jose G. Tamayo Memorial Elementary School", 
      accounts: 0,
      logo: DJTMES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Dr. Marcelino Z. Batista Memorial Elementary School", 
      accounts: 0,
      logo: DMZBMES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Ganado Elementary School", 
      accounts: 0,
      logo: GES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
   { 
      name: "Jacobo Z Gonzales Memorial National High School", 
      accounts: 0,
      logo: JZGMNHS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Langiwa Elementary School", 
      accounts: 0,
      logo: LES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Loma Elementary School", 
      accounts: 0,
      logo: LES2,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Malaban Elementary School", 
      accounts: 0,
      logo: MES2,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Malaban East Elementary School", 
      accounts: 0,
      logo: MEES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Mamplasan Elementary School", 
      accounts: 0,
      logo: MES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Mamplasan National High School", 
      accounts: 0,
      logo: MNHS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Nereo R. Joaquin Memorial National High School", 
      accounts: 0,
      logo: NRJNHS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Our Lady of Lourdes Elementary School", 
      accounts: 0,
      logo: OLES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Pagkakaisa Elementary School", 
      accounts: 0,
      logo: PES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Pedro H. Escueta Memorial Elementary School", 
      accounts: 0,
      logo: PHEMS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Platero Elementary School", 
      accounts: 0,
      logo: PENP,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Saint Anthony Integrated School", 
      accounts: 0,
      logo: SAIS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Saint Francis Integrated National High School", 
      accounts: 0,
      logo: SFNHS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "San Francisco Elementary School", 
      accounts: 0,
      logo: SFES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "San Vicente Elementary School", 
      accounts: 0,
      logo: SVES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Soro-Soro Elementary School", 
      accounts: 0,
      logo: SSES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Southville 5 Elementary School", 
      accounts: 0,
      logo: S5ES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Southville 5A Elementary School", 
      accounts: 0,
      logo: S5AES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Southville 5A National High School", 
      accounts: 0,
      logo: S5AINHS,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Sto.Tomas Elementary School", 
      accounts: 0,
      logo: STES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Timbao Elementary School", 
      accounts: 0,
      logo: TES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Tomas A. Turalba Main Elementary School", 
      accounts: 0,
      logo: TATMES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Tubigan Elementary School", 
      accounts: 0,
      logo: TES2,
      accountIcon: accicon,
      NoImage:NoImage    
    },
    { 
      name: "Zapote Elementary School", 
      accounts: 0,
      logo: ZES,
      accountIcon: accicon,
      NoImage:NoImage    
    },
  ];

  return (
    <div className="admin-section">
      <div className="school-header">
        <h2 className="school-title">Schools</h2>
      </div>
      
      <div className="school-list">
        {schools.map((school, index) => (
          <div key={index} className="school-item">
            {/* School name with school logo */}
      <div className="school-info">
        <img 
          src={school.logo} 
          alt={`${school.name} logo`} 
          className="school-logo"
          onError={(e) => {
            e.target.src = NoImage; // fallback if logo fails
          }}
        />
        <span className="schoolname">  {school.name}</span>
      </div>

      {/* Account count with account-specific icon */}
      <div className="account-count">
        <img 
          src={school.accountIcon} 
          alt="account icon" 
          className="account-image"
          onError={(e) => {
            e.target.src = NoImage; // fallback if account icon fails
          }}
        />
        <span>{school.accounts} Accounts</span>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default School;