import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import MyProfileScreen from "./screens/MyProfileScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Explore from "./screens/Explore";
import CreatePostScreen from "./screens/CreatePostScreen";
import EditUserScreen from "./screens/EditUserScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Alert />
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/profile/me" element={<MyProfileScreen />} />
            <Route path="/profile/me/edit" element={<EditUserScreen />} />
            <Route path="/profile/:id" element={<ProfileScreen />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<CreatePostScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
