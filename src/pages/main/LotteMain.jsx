import MainFrame from "../../components/MainFrame.jsx";
import "../../styles/lotte.css";

export default function LotteMain({ onOpen }) {
  return (
    <MainFrame
      variant="lotte"
      image="/assets/lotte/mockup-lotte.jpg"
      title="Lotte GRS"
      count="02"
      onOpen={onOpen}
    />
  );
}
