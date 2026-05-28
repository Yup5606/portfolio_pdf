import MainFrame from "../../components/MainFrame.jsx";
import "../../styles/parley.css";

export default function ParleyMain({ onOpen }) {
  return (
    <MainFrame
      variant="parley"
      image="/assets/parley/mockup-parley.jpg"
      title="Parley for the Ocean"
      count="01"
      onOpen={onOpen}
    />
  );
}
