import './App.css';
import ResultsGrid from './Components/ResultsGrid';
import SearchBar from './Components/SearchBar';

function App() {
  return (
		<div className='App'>
			<header className='App-header'>Moody</header>

			{/* Search Bar */}
			<SearchBar />

			{/* Results Grid */}
			<ResultsGrid />

			{/* Results Loose Shapes */}

			<body>
				<ul>Functionality includes:</ul>
				<li>search for a location</li>
				<li>get current time</li>
				<li>get current weather</li>
				<li>get suggested playlist</li>
				<li>top news headline from currLocation</li>
				<li>Toggle structure - grid to loose shapes</li>

				<ul>Imports + Integrations</ul>
				<li>React Grid Draggable</li>
				<li>Current Time</li>
				<li>isMobile ? NPM install</li>
				<li>Spotify API</li>
				<li>Open Weather API</li>
				<li>Current News API</li>
			</body>
			<footer></footer>
		</div>
	)
}

export default App;
