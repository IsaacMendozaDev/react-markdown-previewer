import { Header } from "./components/index";
import "./App.css";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  return (
    <div className="app-container d-flex flex-column">
      <Header />
      <main className="main">
        <MarkdownPreviewer />
      </main>
    </div>
  );
}

export default App;
