import React, {useState} from 'react'
import { getWeather, getNews } from '../api/apiConfig'

function SearchBar() {
	const [results, setResults] = useState('')
	const [location, setLocation] = useState('')
	const [news, setNews] = useState('');

	const search = () => {
		getWeather(location)
			.then(console.log('Search function response ' + getWeather(location)))
			.then((res) => setResults(res.data.weather[0].description))
			.then(() => setLocation(''))
			.catch((err) => console.log(err))

		getNews(location)
			.then((res) => setNews(res.data.articles[0]))
			.catch((err) => console.log(err))
	}

	return (
		<div className='search-bar'>
            <label>Search Bar</label>
            <input onChange={(event) => setLocation(event.target.value)} placeholder='test' />
			<p onClick={() => search()}>Submit</p>
			{/* <button onClick={() => search()}>Search</button> */}
			<p>Location: {location}</p>
			<p>Weather: {results}</p>
			<p>News Headline: {news.title}</p>
			<p>Author: {news.author}</p>
			<img style={{ maxWidth: '80%' }} src={news.urlToImage} alt={news.title}/>
		</div>
	)
}

export default SearchBar