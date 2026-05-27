import MainFrame from "../../components/MainFrame.jsx";

export default function ParleyMain({ onOpen }) {
  return (
    <MainFrame
      variant="parley"
      image="/assets/mockup-parley.jpg"
      title="Parley for the Ocean"
      count="01"
      onOpen={onOpen}
    />
  );
}
