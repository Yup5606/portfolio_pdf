import MainFrame from "../../components/MainFrame.jsx";
import "../../styles/rockfish.css";

export default function RockfishMain({ onOpen }) {
  return (
    <MainFrame
      variant="rockfish"
      image="/assets/rockfish/mockup-rockfish.jpg"
      title="Rockfish weatherwear"
      count="03"
      onOpen={onOpen}
    />
  );
}
