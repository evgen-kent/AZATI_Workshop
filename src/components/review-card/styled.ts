import { Card, CardContent, CardHeader } from '@mui/material'
import { styled } from '@mui/material'

export const Review = styled(Card)({
	borderRadius: 20,
	width: 336,
	padding: '28px 32px'
})

export const ReviewHeader = styled(CardHeader)({
	padding: 0,
	margin: '10px 0px 8px 0px',
	display: 'flex',
	flexDirection: 'row-reverse',
	width: 'fit-content',
	'& .MuiCardHeader-title': {
		fontSize: 20,
		fontWeight: 700,
		marginRight: 4,
		letterSpacing: 0
	}
})

export const ReviewContent = styled(CardContent)({
	padding: 0,
	height: 110,
	overflow: 'hidden',
	':last-child': {
		paddingBottom: 0
	}
})
