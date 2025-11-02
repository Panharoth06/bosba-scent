import CurvedLoop from "./CurvedLoop";

const BrandDisplay = () => {
  return (
    <section>
      <CurvedLoop
        marqueeText="BOSBA SCENT ✦ BOSBA SCENT ✦ BOSBA SCENT ✦ BOSBA SCENT ✦ BOSBA SCENT ✦ BOSBA SCENT ✦ "
        speed={0.5}
        interactive={false}
        curveAmount={0}
      />
    </section>
  );
};

export default BrandDisplay;
