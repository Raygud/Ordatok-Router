import { Outlet, Link } from "react-router-dom";
import Letter from "./routes/Letter";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Heim">Heim</Link> {" "}
        <Link to="/A" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>A</Link> {" "}
        <Link to="/B" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Á</Link> {" "}
        <Link to="/B" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>B</Link> {" "}
        <Link to="/D" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>D</Link> {" "}
        <Link to="/Ð" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Ð</Link> {" "}
        <Link to="/E" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>E</Link> {" "}
        <Link to="/F" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>F</Link> {" "}
        <Link to="/G" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>G</Link> {" "}
        <Link to="/H" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>H</Link> {" "}
        <Link to="/I" onClick={() => setTimeout(function(){ window.location.reload() }, 5)}>I</Link> {" "}
        <Link to="/Í" onClick={() => setTimeout(function(){ window.location.reload() }, 5)}>Í</Link> {" "}
        <Link to="/J" onClick={() => setTimeout(function(){ window.location.reload() }, 5)}>J</Link> {" "}
        <Link to="/K" onClick={() => setTimeout(function(){ window.location.reload() }, 5)}>K</Link> {" "}
        <Link to="/L" onClick={() => setTimeout(function(){ window.location.reload() }, 50)}>L</Link> {" "}
        <Link to="/M" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>M</Link> {" "}
        <Link to="/N" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>N</Link> {" "}
        <Link to="/O" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>O</Link> {" "}
        <Link to="/Ó" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Ó</Link> {" "}
        <Link to="/P" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>P</Link> {" "}
        <Link to="/R" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>R</Link> {" "}
        <Link to="/S" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>S</Link> {" "}
        <Link to="/T" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>T</Link> {" "}
        <Link to="/U" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>U</Link> {" "}
        <Link to="/Ú" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Ú</Link> {" "}
        <Link to="/V" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>V</Link> {" "}
        <Link to="/Y" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Y</Link> {" "}
        <Link to="/Ý" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Ý</Link> {" "}
        <Link to="/Æ" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Æ</Link> {" "}
        <Link to="/Ø" onClick={() => setTimeout(function(){ window.location.reload() }, 1)}>Ø</Link> {" "}
        <Link to="/Kontakt">Kontakt</Link> {" "}
      </nav>
      <Outlet />
    </div>
  );
}