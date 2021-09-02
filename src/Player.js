import React from 'react';

import MiniPlayer from './components/mini-player';
import { CONTROLS, POSITION } from './components/mini-player';

import './App.css';

const STREAM_PLAYBACK_URL =
	'https://usher.ttvnw.net/api/lvs/hls/lvs.lvs-client-example.c6341be8-a3c7-42bc-b89a-8dabe040eae9.m3u8';

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
