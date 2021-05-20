import "./App.css";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <FullName></FullName>
      <Address></Address>
      <ProfilePhoto></ProfilePhoto>
    </div>
  );
}

export default App;
