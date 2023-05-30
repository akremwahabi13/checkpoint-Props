import "./App.css";
import Profile from "./Profile/Profile";
import image from "./image.jpg";
function App() {
  let Data = {
    FullName: "Akrem Wahabi",
    Bio: "Welcome Everyone",
    Profession: "Full Stack Developer",
    src: image,
    alt: "profile_img",
  };
  return (
    <div className="App">
      <Profile
        FullName={Data.FullName}
        Bio={Data.Bio}
        Profession={Data.Profession}
      >
        <img
          src={Data.src}
          alt={Data.alt}
          style={{ borderRadius: "50%", width: 90, height: 90 }}
        />
      </Profile>
    </div>
  );
}

export default App;
