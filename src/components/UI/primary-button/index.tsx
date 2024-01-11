import { Button, styled } from '@mui/material'
import { white } from '../../../theme'

/**
 * Sample for such buttons "Shop Now", "Add to Cart", "Write a Review", "Apply Filter", "Apply", "Go to Checkout".
 *
 * @param width
 * @param height
 * @param padding (not necessary). Default value: 16px, 54px. You can change it by writing padding={[vertical_padding, horizontal_padding]}
 */
const PrimaryButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	borderRadius: '62px',
	color: white,
	textTransform: 'none',
	'&:hover': {
		backgroundColor: theme.palette.primary.light
	}
}))

export default PrimaryButton
