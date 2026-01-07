import { Card, Tag, Rate } from 'antd-mobile';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
	const getTagColor = (tag) => {
		const colorMap = {
			action: '#ff6b6b',
			comedy: '#4ecdc4',
			drama: '#95e1d3',
			scifi: '#a8e6cf',
			thriller: '#ffd3a5',
			romance: '#fd79a8',
		};
		return colorMap[tag] || '#f0f0f0';
	};

	return (
		<Card className="movie-card">
			<div className="movie-poster">
				<span className="movie-emoji">{movie.emoji}</span>
			</div>
			<div className="movie-info">
				<div className="movie-title">{movie.title}</div>
				<div className="movie-meta">{movie.year}年</div>
				<div className="movie-rating-wrapper">
					<Rate
						readOnly
						value={movie.rating / 2}
						allowHalf
						style={{ '--star-size': '16px' }}
					/>
					<span className="rating-text">{movie.rating}</span>
				</div>
				<div className="movie-description">{movie.description}</div>
				<div className="tags">
					{movie.tags.map((tag, index) => (
						<Tag
							key={tag}
							style={{
								'--background-color': getTagColor(tag),
								'--text-color': tag === 'action' || tag === 'romance' || tag === 'comedy' ? 'white' : '#333',
							}}
						>
							{movie.genre[index] || tag}
						</Tag>
					))}
				</div>
			</div>
		</Card>
	);
};

export default MovieCard;

