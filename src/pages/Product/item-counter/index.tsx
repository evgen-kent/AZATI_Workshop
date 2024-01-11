import { ButtonGroup, Typography, useMediaQuery } from '@mui/material'
import { THEME_COLOR_BLACK, lightGray } from './../../../theme'
import { StyledSetCountButton } from '../styled'
import { IncreaseIcon, ReduceIcon } from './../../../components/UI/icons'
import { useCallback } from 'react'

interface ItemCounterProps {
	setCount: (state: number) => void
	count: number
}

const ItemCounter = ({ setCount, count }: ItemCounterProps) => {
	const reduceCount = useCallback(() => {
		setCount(Math.max(count - 1, 1))
	}, [count, setCount])
	const increaseCount = useCallback(() => {
		setCount(count + 1)
	}, [count, setCount])

	const setCountIconViewBox = useMediaQuery('(max-width: 390px)')
		? '0 0 20 20'
		: '0 0 24 24'
	const setCountIconSize = useMediaQuery('(max-width: 390px)') ? 20 : 24

	return (
		<ButtonGroup
			className='count-button'
			sx={{
				backgroundColor: lightGray,
				borderRadius: '62px',
				padding: { xs: '0 16px', md: '0 20px' },
				width: { xs: '88px', md: '130px' }
			}}
		>
			<StyledSetCountButton
				setCountIconSize={setCountIconSize}
				onClick={reduceCount}
			>
				<ReduceIcon
					width={setCountIconSize}
					height={setCountIconSize}
					viewBox={setCountIconViewBox}
				/>
			</StyledSetCountButton>
			<Typography
				sx={{
					height: '20px',
					color: THEME_COLOR_BLACK[100],
					fontSize: { xs: '14px', md: '16px' },
					fontWeight: '400',
					lineHeight: 'normal'
				}}
			>
				{count}
			</Typography>
			<StyledSetCountButton
				setCountIconSize={setCountIconSize}
				onClick={increaseCount}
			>
				<IncreaseIcon
					width={setCountIconSize}
					height={setCountIconSize}
					viewBox={setCountIconViewBox}
				/>
			</StyledSetCountButton>
		</ButtonGroup>
	)
}

export default ItemCounter
