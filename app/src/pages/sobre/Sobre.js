import "../../css/body.css";
import sobre1 from "./sobre1.svg";
import sobre2 from "./sobre2.svg";

const Sobre = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            paddingLeft: "5%",
          }}
        >
          <img src={sobre1} alt="sobre1" />
        </div>
      </div>
      <div>
        <div
          style={{
            width: "40%",
            textAlign: "center",
            marginTop: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            paddingLeft: "5%",
          }}
        >
          <img src={sobre2} alt="sobre2" />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
