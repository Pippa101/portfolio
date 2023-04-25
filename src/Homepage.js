import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div id="home-grid">
      <Link className="Link" to={"/Artwork"}>
        <section id="artwork" className="tile">
          <img
            src={require("./images/Mocha.jpg")}
            className="nav-img"
            alt="thumbnail of a red mochapot"
          />
          <h2>Artwork and Style</h2>
        </section>
      </Link>
      <article id="art-extra-info" className="extra-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </article>
      <section id="software-development" className="tile">
        <img
          src={require("./images/hair-serum-bottle copy.jpeg")}
          className="nav-img"
          alt="thumbnail of a heal thy hair serum product"
        />
        <h2>Software Development</h2>
      </section>
      <article id="dev-extra-info" className="extra-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </article>
      <section id="about" className="tile">
        <img
          src={require("./images/smart-profile-1.jpg")}
          className="nav-img"
          alt="portrait of Author"
        />
        <article>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Homepage;
