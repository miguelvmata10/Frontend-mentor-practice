const PlanetImage = ({ src }: { src: string }) => {
  return (
    <img
      src={src}
      alt="PlanetImg"
      className="w-[150px] md:w-[300px] lg:w-[480px]"
    />
  );
};
export default PlanetImage;
