import { Rating } from '@mui/material'

interface RatingBarProps {
	name: string
	defaultValue?: number
	precision?: number
}
const RatingBar = (props: RatingBarProps): JSX.Element => {
	const { name, defaultValue, precision } = props
	return (
		<>
			{name === 'read' ? (
				<Rating
					name={name}
					defaultValue={defaultValue || 2.5}
					precision={precision || 0.5}
					readOnly
				/>
			) : (
				<Rating
					name={name}
					defaultValue={defaultValue || 2.5}
					precision={precision || 0.5}
				/>
			)}
		</>
	)
}

export default RatingBar
