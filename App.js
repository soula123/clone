import "./App.css";
import mtar from "./images/mtar.png"
import windy from "./images/windy.png"
import sunny from "./images/sunny.png"

export default function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container-s">
      <NewsCard
        title="Absolutely astonishing breaking news!"
        descripton="Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko. Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko."
        bgImage="https://i.postimg.cc/dtW10PtT/dog-resizedimagehead.jpg"
      />
      <Weather 
      place="Brighton,UK"
      desc="Sunny"
      img ={sunny}
      />
      <div className="section2">
              <TopNews />
              <Scores />
      </div>



      </div>
           
      </div>
  );
}

function Navbar() {
  return (
    <nav>
      <TopBar />
      <Menu />
    </nav>
  );
}

function TopBar() {
  return (
    <div
      style={{
        padding: "10px 100px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        boxShadow: "0px 4px 4px gray"
      }}
    >
      <img
        src="https://s17.postimg.cc/i3kjs8kxb/city.png"
        style={{ width: "70px" }}
        alt=""
      />
      <span style={{ fontSize: "40px", fontFamily: "roboto" }}>
        The Brighton Times
      </span>
    </div>
  );
}

function Menu() {
  return (
    <ul
      style={{
        justifyContent:"center",
        padding: "0px 100px",
        display: "flex",
        listStyle: "none",
        gap: "40px"
      }}
    >
      <MenuItem text="news" link="http://news" />
      <MenuItem text="events" link="http://news" />
      <MenuItem text="culture" link="http://news" />
      <MenuItem text="blog" link="http://news" />
    </ul>
  );
}

function MenuItem({ text, link }) {
  return (
    <li style={{ padding: "10px 20px" }}>
      <a style={{ color: "gray", textDecoration: "none" }} href={link}>
        {text.toUpperCase()}
      </a>
    </li>
  );
}

function NewsCard({ title, descripton, bgImage }) {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position:"relative",
        width:"600px",
      }}
    >
      <img src={bgImage} alt="image" style={{width:"100%"}} ></img>
      <div
        style={{
          background: "black",
          opacity: "0.8",
          padding: "10px 20px",
          position:"absolute",
          top:"255px"
        }}
      >
        <h3>{title}</h3>
        <p>{descripton}</p>
      </div>
    </div>
  );
}
function Weather({place,desc,img}){
return(
  <div
      style={{
        margin:"10px"

      }}
    >
   

     <h3>{place}</h3>
     <h4>{desc}</h4>
     <img style={{width:"150px"}} src="https://s17.postimg.cc/gad1pvkjz/weather.png"></img>

     <div>
     <ImgItem day="Mon" weather={sunny} deg="13 °C" />
     <ImgItem day="Tues" weather={windy} deg="13 °C" />
     <ImgItem day="Wed" weather={windy} deg="13 °C" />
     <ImgItem day="Thu" weather={mtar} deg="13 °C" />
     <ImgItem day="Fri" weather={sunny} deg="13 °C" />

     </div>

      </div>
      

);
}
function ImgItem({day,weather,deg}){
return(
<div className="Weather-mini">
<h4>{day}</h4>
<img src={weather}></img>
<h4>{deg}</h4>

</div>

);

}

function TopNews(){
  return(

    <div className="mt-3 ml-5">
        <section className="news top-news">
          <h2 className="title ">Top news <a href="#" className="news-more">+ more</a></h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="#">Gastropub distillery Marfa farm-to-table, Etsy Truffaut fingerstache.</a>
            </li>
            <li className="list-group-item">
              <a href="#">Squid lomo Kickstarter art lomo Kickstarter art party cronut scenester.</a>
            </li>
            <li className="list-group-item">
              <a href="#">Organic raw denim lomo Kickstarter art Vice keffiyeh four loko.</a>
            </li>
            <li className="list-group-item">
              <a href="#">Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko.</a>
            </li>
          </ul>
        </section>

    </div>



  );
}

function Scores(){
  return(


    <div>

<table className="table table-striped">
<thead className="table-col">
<tr>
<th>Date</th>
<th>location</th>
<th>Team</th>
<th>Score</th>
<th>team</th>
</tr>
</thead>
<tbody>
<tr>
                <td>Friday</td>
                <td>Brighton</td>
                <td>Bears</td>
                <td>95</td>
                <td >109</td>
                <td>Cubs</td>
</tr>
<tr>
                <td>Friday</td>
                <td class="scores__location">Worthington</td>
                <td class="winner">Otters</td>
                <td class="winner">3</td>
                <td>1</td>
                <td>Cubs</td>
</tr>
<tr>
                <td>Saturday</td>
                <td class="scores__location">Littlehampton</td>
                <td class="winner">Wolves</td>
                <td class="winner">7</td>
                <td>0</td>
                <td>Panthers</td>
</tr>
 <tr>
                <td>Sunday</td>
                <td class="scores__location">Portslade</td>
                <td>Hawks</td>
                <td>11</td>
                <td class="winner">12</td>
                <td class="winner">Capons</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td class="scores__location">Hove</td>
                <td class="winner">Stags</td>
                <td class="winner">6</td>
                <td>2</td>
                <td>Foxes</td>
              </tr>

              </tbody>
          </table>

    </div>
  );
}