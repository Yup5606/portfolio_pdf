import MainFrame from "../../components/MainFrame.jsx";

export default function LotteMain({ onOpen }) {
  return (
    <MainFrame
      variant="lotte"
      image="/assets/mockup-lotte.jpg"
      title="Lotte GRS"
      count="02"
      onOpen={onOpen}
    />
  );
}
