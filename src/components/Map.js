import Iframe from "react-iframe";

const Mapview = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gray-300">
        <Iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.733577698635!2d-68.0908549!3d-16.5395426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f214c4adf7fb7%3A0xeefbaff9d3939e6f!2sCO%20-%20MARCA%20Cowork%2C%20Un%20cowork%20con%20prop%C3%B3sito!5e0!3m2!1ses!2sbo!4v1661203141073!5m2!1ses!2sbo"
        />
      </div>
    </>
  );
};

export default Mapview;
