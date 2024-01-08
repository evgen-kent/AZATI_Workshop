import { useState } from 'react'
import { Checkbox, Typography, IconButton } from '@mui/material'
import { MdExpandLess } from 'react-icons/md'
import theme from '../../theme'
import {
	ColorPickerBox,
	GroupCirclesContainer,
	BpIcon,
	BpCheckedIcon
} from './styled'

export const ColorPicker = () => {
	const [colors, setColors] = useState([
		{ id: 1, color: '#00c12a', selected: false },
		{ id: 2, color: '#f50505', selected: false },
		{ id: 3, color: '#f5dd05', selected: false },
		{ id: 4, color: '#f57805', selected: false },
		{ id: 5, color: '#05c9f5', selected: false },
		{ id: 6, color: '#053af5', selected: false },
		{ id: 7, color: '#7d05f5', selected: false },
		{ id: 8, color: '#f505a3', selected: false },
		{ id: 9, color: '#ffffff', selected: false },
		{ id: 10, color: '#000000', selected: false }
	])
	const [boxHidden, setBoxHidden] = useState(false)

	const handleColorClick = (id: number) => {
		const updatedColors = colors.map(color =>
			color.id === id ? { ...color, selected: !color.selected } : color
		)
		setColors(updatedColors)
	}

	const handleBoxClose = () => {
		const updatedColors = colors.map(color => {
			color.selected = false
			return color
		})
		setColors(updatedColors)
		setBoxHidden(!boxHidden)
	}

	return (
		<ColorPickerBox>
			<div
				style={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
					position: 'relative',
					paddingBottom: '20px',
					width: '100%',
					flex: '0 0 auto',
					alignSelf: 'stretch'
				}}
			>
				<Typography
					sx={{
						fontSize: '20px',
						fontWeight: '600',
						position: 'relative',
						width: 'fit-content',
						letterSpacing: '-0.8px',
						fontFamily: 'Satoshi-Bold'
					}}
					color={theme.palette.primary.main}
				>
					Colors
				</Typography>
				<IconButton
					sx={{
						'&:focus': {
							outline: 'none'
						},
						float: 'left',
						padding: 0
					}}
					disableRipple
					onClick={() => handleBoxClose()}
				>
					<MdExpandLess
						style={{
							position: 'relative',
							color: theme.palette.primary.main,
							fontSize: 28
						}}
					/>
				</IconButton>
			</div>
			{!boxHidden && (
				<GroupCirclesContainer>
					{colors.map(elem => (
						<Checkbox
							sx={{ backgroundImage: elem.color, padding: 0 }}
							icon={<BpIcon color={elem.color}></BpIcon>}
							checkedIcon={
								<BpCheckedIcon
									color={elem.color}
									colorimg={`
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
									  <path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z"
										fill="${elem.color == '#ffffff' ? '#000' : '#fff'}"
									  />
									</svg>
								  `}
								></BpCheckedIcon>
							}
							disableRipple
							key={elem.id}
							onClick={() => handleColorClick(elem.id)}
							checked={elem.selected}
						></Checkbox>
					))}
				</GroupCirclesContainer>
			)}
		</ColorPickerBox>
	)
}
