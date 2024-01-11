import { useCallback, useEffect, useState } from 'react'
import { Checkbox } from '@mui/material'
import { GroupCirclesContainer, BpIcon, BpCheckedIcon } from './styled'
import { IColors } from 'types/colorType'

interface ColorPickerProps {
	initialColors: IColors[]
}

export const ColorPicker = ({ initialColors }: ColorPickerProps) => {
	const [colors, setColors] = useState<IColors[]>([])
	useEffect(() => {
		setColors(initialColors)
	}, [initialColors])

	const handleColorClick = useCallback(
		(id: number) => {
			const updatedColors = colors.map(color =>
				color.id === id ? { ...color, selected: !color.selected } : color
			)
			setColors(updatedColors)
		},
		[colors]
	)

	return (
		<GroupCirclesContainer>
			{colors &&
				colors.map(elem => (
					<Checkbox
						sx={{
							backgroundImage: elem.color,
							padding: 0
						}}
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
	)
}
