import React from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/YoutubePlayer.module.css';

export default class YoutubePlayer
extends React.Component {
render() {
	const opts = {
	height: '113',
	width: '200',
	playerVars: {
		autoplay: 1,
	},
	};

	return (
	<div className={styles.yt_container}>
		<h3>My actual recommendation</h3>
		<YouTube videoId='ecK3EnyGD8o'
			opts={opts} onReady={this._onReady} 
		/>
	</div>
	);
}

_onReady(event: { target: { pauseVideo: () => void; }; }) {
	event.target.pauseVideo();
}
}
