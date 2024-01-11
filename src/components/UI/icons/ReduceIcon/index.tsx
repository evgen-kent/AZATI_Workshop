import Svg, { IconProps } from '../../Svg'

const ReduceIcon = ({
	width = 24,
	height = 24,
	viewBox = '0 0 24 24',
	...props
}: IconProps): JSX.Element => (
	<Svg width={width} height={height} viewBox={viewBox} {...props}>
		<path
			d='M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z'
			fill='black'
		/>
	</Svg>
)

export default ReduceIcon
