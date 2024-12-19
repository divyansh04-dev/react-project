import './App.css';
import ColorBar from './components/ColorBar';

function App() {
  return (
    <>
       <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to Color Selector</h1>
        <p className="text-xl mb-4">Select a color from the bar below</p>
        <ColorBar />
      </main>
    </>
  )
}

export default App;