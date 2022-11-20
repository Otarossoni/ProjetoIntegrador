import emBreve from "./emBreve.svg";
import "../../css/body.css";

const EmBreve = () => {
  return (
    <div className="img_404">
      <h2 style={{ textAlign: "center" }}>Estamos em construção por aqui...</h2>
      <img style={{ marginTop: "-4.5%" }} src={emBreve} alt="emBreve" />{" "}
    </div>
  );
};

export default EmBreve;
