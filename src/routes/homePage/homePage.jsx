import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque
            quod quaerat libero autem ut sed voluptatibus laudantium impedit aut
            cum, qui debitis corrupti corporis. Voluptates, odit? Distinctio,
            nobis inventore.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Year of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" className="bg-img" />
      </div>
    </div>
  );
}

export default HomePage;
