const Homepage = () => {
  return (
    <div id="home-grid">
      <section id="artwork" className="tile">
        <img
          src={require("./images/Mocha.jpg")}
          className="nav-img"
          alt="thumbnail of a red mochapot"
        />
        <h2>Artwork and Style</h2>
      </section>
      <section id="software-development" className="tile">
        <img
          src={require("./images/hair-serum-bottle copy.jpeg")}
          className="nav-img"
          alt="thumbnail of a heal thy hair serum product"
        />
        <h2>Software Development</h2>
      </section>
      <section id="about" className="tile">
        <img
          src={require("./images/smart-profile-1.jpg")}
          className="nav-img"
          alt="portrait of Author"
        />
        <h2>About</h2>
      </section>
    </div>
  );
};

export default Homepage;
