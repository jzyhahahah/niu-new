import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar, Empty } from 'antd-mobile';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';
import './Home.css';

function Home() {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');

	const filteredMovies = useMemo(() => {
		if (!searchValue.trim()) {
			return movies;
		}

		const searchTerm = searchValue.toLowerCase().trim();
		return movies.filter(
			(movie) =>
				movie.title.toLowerCase().includes(searchTerm) ||
				movie.description.toLowerCase().includes(searchTerm) ||
				movie.genre.some((g) => g.toLowerCase().includes(searchTerm))
		);
	}, [searchValue]);

	const handleMovieClick = (movieId) => {
		navigate(`/movie/${movieId}`);
	};

	return (
		<div className="home-page">
			<div className="search-container">
				<SearchBar
					placeholder="搜索电影、电视剧..."
					value={searchValue}
					onChange={setSearchValue}
					showCancelButton
					onClear={() => setSearchValue('')}
				/>
			</div>

			{filteredMovies.length === 0 ? (
				<Empty
					description="😔 没有找到相关电影"
					style={{ padding: '60px 20px', color: 'white' }}
				/>
			) : (
				<div className="movies-list">
					{filteredMovies.map((movie) => (
						<div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
							<MovieCard movie={movie} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;

