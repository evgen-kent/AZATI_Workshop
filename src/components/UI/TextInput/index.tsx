import { FormControlProps, TextField, styled } from '@mui/material'
import { THEME_COLOR_BLACK, white } from '../../../theme'

interface TextInputProps extends FormControlProps {
	backgroundColor?: string
	fontSize?: number
	height?: number
	width: number
}

/**
 * Sample for such buttons "Shop Now", "Add to Cart", "Write a Review", "Apply Filter", "Apply", "Go to Checkout".
 *
 * @param width
 * @param backgroundColor (not necessary). Default value: '#FFFFFF' (white).
 * @param fontSize (not necessary). Default value: 16px.
 * @param height (not necessary). Default value: 48px.
 */
const TextInput = styled(TextField)<TextInputProps>(
	({ theme, backgroundColor, fontSize, height, width }) => ({
		'& .MuiInputBase-input': {
			backgroundColor: backgroundColor || white,
			borderRadius: '62px',
			color: THEME_COLOR_BLACK[40],
			fontSize: fontSize || 16,
			height: height || 20,
			outline: 'none',
			padding: [12, 16],
			textTransform: 'none',
			width: width,
			'&:focus': {
				color: theme.palette.primary.main,
				borderColor: theme.palette.primary.main,
				outline: 'none'
			}
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: `62px`
		}
	})
)

// error state
export default TextInput
