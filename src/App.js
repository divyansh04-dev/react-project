import './App.css';
import Card from './components/Card';

function App() {
  const data = {
    name: ['divyansh', 'aryan'],
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card name="divyansh" />
      <Card name="aryan" />
    </div>
  );
}

export default App;
