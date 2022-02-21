import './App.css';
import ResultsGrid from './Components/ResultsGrid';
import SearchBar from './Components/SearchBar';

function App() {
  return (
		<div className='App'>
			<header className='App-header'>Moody</header>
			<body>

				<ul>Functionality includes:</ul>
          <li>search for a location</li>
          <li>get current time</li>
          <li>get current weather</li>
          <li>get suggested playlist</li>
          <li>top news headline from currLocation</li>


				<ul>Imports + Integrations</ul>
          <li>React Grid Draggable</li>
          <li>Current Time</li>
          <li>isMobile ? NPM install</li>
          <li>Spotify API</li>
          <li>Open Weather API</li>
          <li>Current News API</li>

			</body>

      {/* Search Bar */}
      <SearchBar />

      {/*  */}
      <ResultsGrid />

      {/*  */}
      
      <footer>
        <p>About</p>
        <p>Documentation</p>
        <p>License</p>
      </footer>
		</div>
	)
}

export default App;
