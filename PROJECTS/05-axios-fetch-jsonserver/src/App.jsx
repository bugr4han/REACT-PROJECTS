import FetchGet from "./components/FetchGet";
import FetchPost from "./components/FetchPost";
import FetchPut from "./components/FetchPut";
import FetchDelete from "./components/FetchDelete";

import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import AxiosPut from "./components/AxiosPut";
import AxiosDelete from "./components/AxiosDelete";

import "./css/App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="api-group">
          <h2>Axios</h2>
          <div className="api-buttons-column">
            <AxiosGet />
            <AxiosPost />
            <AxiosPut />
            <AxiosDelete />
          </div>
        </div>

        <div className="api-group">
          <h2>Fetch</h2>
          <div className="api-buttons-column">
            <FetchGet />
            <FetchPost />
            <FetchPut />
            <FetchDelete />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>CHECK CONSOLE!</h3>
      </div>
    </>
  );
}

export default App;
