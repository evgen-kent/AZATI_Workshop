import SvgIcon from '@mui/material/SvgIcon'

export interface IconProps {
	height: number
	width: number
	children?: JSX.Element | JSX.Element[]
}
const Svg = ({ height, width, children }: IconProps) => {
	const minViewBox = 100
	const isSquareSvg =
		width == height && (width < minViewBox || height < minViewBox)
	return (
		<SvgIcon
			style={{ width: width, height: height }}
			viewBox={
				isSquareSvg
					? `0 0 ${minViewBox} ${minViewBox}`
					: `0 0 ${width} ${height}`
			}
		>
			{children}
		</SvgIcon>
	)
}

export default Svg
