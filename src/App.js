import "./App.css";
import CreateSyllabus from "./pages/syllabus/createSyllabus";

function App() {
  return (
    <div className="App">
      <header
        style={{
          height: 50,
          width: "100%",
        }}
      ></header>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          className="navigateHeader"
          style={{
            height: "100vh",
            width: 290,
          }}
        ></div>
        <CreateSyllabus />
      </div>
    </div>
  );
}

export default App;
