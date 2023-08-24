import BoxLink from "../Components/BoxLink";


function Accueil() {
  const content = [
    { name: "Boxy", link: "/boxy" },
    { name: "Slider", link: "/slider" },
    { name: "GeoData", link: "/geodata" },
    { name: "IDE", link: "/ide" },
    { name: "Pomodoro", link: "/pomodoro" },
  ];

  return (
    <div>
      <h1>10+1 Projets React avec Enzo </h1>
      <div className="boxLinkContainer">
        {content.map((each, index) => (
          <BoxLink key={index} content={each} />
        ))}
      </div>
      
    </div>
  );
}

export default Accueil;
