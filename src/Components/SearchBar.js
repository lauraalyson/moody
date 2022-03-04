import React, {useState} from 'react'
import { getWeather } from '../api/apiConfig'

function SearchBar() {
	const [results, setResults] = useState('')
	const [location, setLocation] = useState('')

	const search = () => {
		getWeather(location)
			.then(console.log('Search function response ' + getWeather(location)))
			.then((res) => setResults(res.data.weather[0].description))
			.then(() => console.log('Results: ' + results))
	}

	return (
		<div className='search-bar'>
            <label>Search Bar</label>
            <input onChange={(event) => setLocation(event.target.value)}/>
			<p onClick={() => search()}>Submit</p>
			{/* <button onClick={() => search()}>Search</button> */}
			<p>Location: {location}</p>
			<p>Results: {results}</p>
		</div>
	)
}

export default SearchBar