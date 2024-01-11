import { Box, Typography } from '@mui/material'
import { THEME_COLOR_BLACK, red } from './../../../theme'

interface PriceProps {
	totalCost: number
	initialCost?: number
	discount?: number
}

const Price = ({ totalCost, initialCost, discount }: PriceProps) => {
	return (
		<Box
			sx={{
				marginTop: { xs: '12px', md: '15px' },
				display: 'flex',
				gap: '12px'
			}}
		>
			<Typography variant='h4'>{`$${totalCost}`}</Typography>
			{initialCost && discount ? (
				<>
					<Typography
						variant='h4'
						style={{
							textDecoration: 'line-through',
							color: THEME_COLOR_BLACK[20]
						}}
					>
						${initialCost}
					</Typography>
					<Box
						sx={{
							width: { xs: '39px', md: '46px' },
							borderRadius: '62px',
							backgroundColor: 'rgba(255, 51, 51, 0.10)',
							padding: { xs: '6px 12px', md: '6px 14px' },
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Typography
							variant='body1'
							sx={{
								color: red,
								fontWeight: '400',
								fontSize: { xs: '14px', md: '16px' },
								letterSpacing: { xs: '-0.56px', md: '-0.64px' },
								lineHeight: 'normal'
							}}
						>
							-{discount}%
						</Typography>
					</Box>
				</>
			) : null}
		</Box>
	)
}

export default Price
