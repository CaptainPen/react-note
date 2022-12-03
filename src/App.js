import "./components/styles/App.scss";
import Header from "./components/NoteComponents/Header";
import Notes from "./components/NoteComponents/Notes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Notes />
    </div>
  );
};

export default App;
