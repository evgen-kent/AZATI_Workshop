import { styled } from '@mui/material'

export const GroupCirclesContainer = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gap: '16px',
	alignItems: 'center',
	width: 'fit-content'
})

export const BpIcon = styled('span')(({ color }) => ({
	borderRadius: 18.5,
	boxSizing: 'border-box',
	border: '1px solid #00000033',
	width: 36.5,
	height: 36.5,
	position: 'relative',
	alignItems: 'center',
	'input ~ &': {
		backgroundColor: color
	}
}))

export const BpCheckedIcon = styled(BpIcon)(
	({ color, colorimg }: { color: string; colorimg: string }) => ({
		border: '2px solid #00000033',
		'&::before': {
			display: 'block',
			height: 32,
			width: 32,
			backgroundImage: `url("data:image/svg+xml;base64,${btoa(colorimg)}")`,
			content: '""'
		},
		'input:hover ~ &': {
			backgroundColor: color
		}
	})
)
