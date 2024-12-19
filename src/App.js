import './App.css';
import ProfileCard from './components/profileCard';
import profileImage from './components/img/profileImage.jpeg';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProfileCard name="divyansh" profileImage={profileImage} />
      <ProfileCard name="aryan" />
    </div>
  );
}

export default App;