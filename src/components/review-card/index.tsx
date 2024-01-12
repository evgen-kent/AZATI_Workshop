import { Typography } from '@mui/material'
import { Review, ReviewHeader, ReviewContent } from './styled'
import RatingBar from '../UI/rating-bar'
import { FaCircleCheck } from 'react-icons/fa6'

interface ReviewCardProps {
	name: string
	precision?: number
	text: string
}

export const ReviewCard = (props: ReviewCardProps): JSX.Element => {
	const { precision, name, text } = props
	return (
		<Review variant='outlined'>
			<RatingBar name='read' precision={precision}></RatingBar>
			<ReviewHeader
				title={name}
				avatar={<FaCircleCheck color='green' size={20}></FaCircleCheck>}
			></ReviewHeader>
			<ReviewContent>
				<Typography variant='body1'>{text}</Typography>
			</ReviewContent>
		</Review>
	)
}
