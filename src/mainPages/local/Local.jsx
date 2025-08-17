import NavBar from "../homePage/Navbar";
import "../local/local.css";

import asdsSenegal from "../../images/local-images/asds-senegal.jpg";
import balbus from "../../images/local-images/balbus.jpg";
import beseda from "../../images/local-images/beseda.jpg";
import formaKumanovo from "../../images/local-images/forma-kumanovo.jpg";
import pucaCerep from "../../images/local-images/puca-cerep.jpg";
import qrec from "../../images/local-images/qrec.jpg";
import tuningSlavia from "../../images/local-images/tuning-slavia.jpg";

function Local() {
  return (
    <>
      <NavBar bgColor={"#423e37"} />
      <div className="main-container">
        <div className="cards-wrapper">
          <div className="card">
            <img className="logo" src={asdsSenegal} alt="asds-senegal-logo" />
            <p className="item-title">asds Senegal</p>
          </div>
          <div className="card">
            <img className="logo" src={balbus} alt="balbus-logo" />
            <p className="item-title">Balbus</p>
          </div>
          <div className="card">
            <img className="logo" src={beseda} alt="beseda-logo" />
            <p className="item-title">Beseda</p>
          </div>
          <div className="card">
            <img
              className="logo"
              src={formaKumanovo}
              alt="forma-kumanovo-logo"
            />
            <p className="item-title">Forma Kumanovo</p>
          </div>
          <div className="card">
            <img className="logo" src={pucaCerep} alt="puca=cerep-logo" />
            <p className="item-title">Puca Cerep</p>
          </div>
          <div className="card">
            <img className="logo" src={qrec} alt="qrec-logo" />
            <p className="item-title">Qrec</p>
          </div>
          <div className="card">
            <img className="logo" src={tuningSlavia} alt="tuning-slavia-logo" />
            <p className="item-title">Tuning Slavia</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Local;
