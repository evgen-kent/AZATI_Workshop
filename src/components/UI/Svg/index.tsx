import SvgIcon from '@mui/material/SvgIcon'

export interface IconProps {
	height: number
	width: number
	viewBox?: string
	children?: JSX.Element | JSX.Element[]
}
const Svg = ({ height, width, viewBox, children }: IconProps) => {
	return (
		<SvgIcon style={{ width: width, height: height }} viewBox={viewBox}>
			{children}
		</SvgIcon>
	)
}

export default Svg
