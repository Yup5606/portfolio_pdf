import MainFrame from "../../components/MainFrame.jsx";

export default function RockfishMain({ onOpen }) {
  return (
    <MainFrame
      variant="rockfish"
      image="/assets/mockup-rockfish.jpg"
      title="Rockfish weatherwear"
      count="03"
      onOpen={onOpen}
    />
  );
}
