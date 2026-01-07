import { useParams, useNavigate } from 'react-router-dom';
import { NavBar, Tag, Rate, Button, Toast } from 'antd-mobile';
import { HeartOutline, HeartFill } from 'antd-mobile-icons';
import { movies } from '../data/movies';
import { useState } from 'react';
import './MovieDetail.css';

function MovieDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [isFavorite, setIsFavorite] = useState(false);

	const movie = movies.find((m) => m.id === parseInt(id));

	if (!movie) {
		return (
			<div className="movie-detail-page">
				<NavBar onBack={() => navigate('/')}>电影详情</NavBar>
				<div className="not-found">
					<p>😔 未找到该电影</p>
					<Button color="primary" onClick={() => navigate('/')}>
						返回首页
					</Button>
				</div>
			</div>
		);
	}

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

	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		Toast.show({
			icon: isFavorite ? 'success' : 'success',
			content: isFavorite ? '已取消收藏' : '已添加收藏',
		});
	};

	return (
		<div className="movie-detail-page">
			<NavBar onBack={() => navigate('/')}>电影详情</NavBar>

			<div className="movie-detail-content">
				<div className="movie-poster-large">
					<span className="movie-emoji-large">{movie.emoji}</span>
				</div>

				<div className="movie-header">
					<div className="movie-title-large">{movie.title}</div>
					<div className="movie-meta-large">
						<span>{movie.year}年</span>
						<span className="divider">•</span>
						<span>{movie.genre.join(' / ')}</span>
					</div>
					<div className="movie-rating-section">
						<Rate
							readOnly
							value={movie.rating / 2}
							allowHalf
							style={{ '--star-size': '20px' }}
						/>
						<span className="rating-text-large">{movie.rating}</span>
					</div>
				</div>

				<div className="movie-actions">
					<Button
						color={isFavorite ? 'danger' : 'default'}
						fill="outline"
						onClick={handleFavorite}
					>
						{isFavorite ? <HeartFill /> : <HeartOutline />}
						{isFavorite ? '已收藏' : '收藏'}
					</Button>
				</div>

				<div className="movie-description-section">
					<h3>剧情简介</h3>
					<p className="movie-description-full">{movie.description}</p>
				</div>

				<div className="movie-tags-section">
					<h3>类型标签</h3>
					<div className="tags">
						{movie.tags.map((tag, index) => (
							<Tag
								key={tag}
								style={{
									'--background-color': getTagColor(tag),
									'--text-color':
										tag === 'action' || tag === 'romance' || tag === 'comedy'
											? 'white'
											: '#333',
								}}
							>
								{movie.genre[index] || tag}
							</Tag>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieDetail;

