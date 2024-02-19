import React from 'react';

import MiniPlayer from './components/mini-player';
import { CONTROLS, POSITION } from './components/mini-player';

import './App.css';

const STREAM_PLAYBACK_URL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

const Player = () => {
	return (
		<MiniPlayer
			streamUrl={STREAM_PLAYBACK_URL}
			controls={[CONTROLS.resize, CONTROLS.close, CONTROLS.mute]}
			position={POSITION.bottomRight}
			transition
		/>
	);
};

export default Player;
