import Svg, { IconProps } from '../../Svg'

const StarIcon = ({
	width = 104,
	height = 104,
	...props
}: IconProps) => (
	<Svg width={width} height={height} {...props}>
		<path
			d='M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z'
			fill='black'
		/>
	</Svg>
)

export default StarIcon
