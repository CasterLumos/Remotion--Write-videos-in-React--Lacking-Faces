import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_2} from './config';

export const Subtitle: React.FC = () => {
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 55,
				textAlign: 'center',
				position: 'absolute',
				bottom: 140,
				width: '100%',
			}}
		>
			Agora com mais{' '}
			<code
				style={{
					color: "white",
				}}
			>
				informação e conhecimento
			</code>{' '}
			para você!
		</div>
	);
};
