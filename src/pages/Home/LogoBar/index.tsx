import { Box, List, ListItem, useMediaQuery } from '@mui/material'
import { THEME_COLOR_BLACK } from '../../../theme'
import VersaceImage from './../../../assets/img/versace-image.png'
import ZaraImage from './../../../assets/img/zara-image.png'
import GucciImage from './../../../assets/img/gucci-image.png'
import PradaImage from './../../../assets/img/prada-image.png'
import CalvinKleinImage from './../../../assets/img/calvin-klein-image.png'
import './styles.scss'

const LogoBar = (): JSX.Element => {
	const versaceWidth = useMediaQuery('(max-width: 390px)') ? '117px' : '167px'
	const versaceHeight = useMediaQuery('(max-width: 390px)') ? '24px' : '34px'
	const zaraWidth = useMediaQuery('(max-width: 390px)') ? '65px' : '92px'
	const zaraHeight = useMediaQuery('(max-width: 390px)') ? '27px' : '38px'
	const gucciWidth = useMediaQuery('(max-width: 390px)') ? '110px' : '157px'
	const gucciHeight = useMediaQuery('(max-width: 390px)') ? '26px' : '36px'
	const pradaWidth = useMediaQuery('(max-width: 390px)') ? '127px' : '195px'
	const pradaHeight = useMediaQuery('(max-width: 390px)') ? '21px' : '32px'
	const calvinKleinWidth = useMediaQuery('(max-width: 390px)')
		? '135px'
		: '208px'
	const calvinKleinHeight = useMediaQuery('(max-width: 390px)')
		? '23px'
		: '34px'

	return (
		<Box className='brands' bgcolor={THEME_COLOR_BLACK[100]}>
			<Box className='brands-wrapper'>
				<List className='brands-list' sx={{ padding: 0 }}>
					<ListItem
						sx={{
							width: versaceWidth,
							height: versaceHeight
						}}
					>
						<img
							src={VersaceImage}
							loading='lazy'
							width={versaceWidth}
							height={versaceHeight}
						/>
					</ListItem>
					<ListItem
						sx={{
							width: zaraWidth,
							height: zaraHeight
						}}
					>
						<img
							src={ZaraImage}
							loading='lazy'
							width={zaraWidth}
							height={zaraHeight}
						/>
					</ListItem>
					<ListItem
						sx={{
							width: gucciWidth,
							height: gucciHeight
						}}
					>
						<img
							src={GucciImage}
							loading='lazy'
							width={gucciWidth}
							height={gucciHeight}
						/>
					</ListItem>
					<ListItem
						sx={{
							width: pradaWidth,
							height: pradaHeight
						}}
					>
						<img
							src={PradaImage}
							loading='lazy'
							width={pradaWidth}
							height={pradaHeight}
						/>
					</ListItem>
					<ListItem
						sx={{
							width: calvinKleinWidth,
							height: calvinKleinHeight
						}}
					>
						<img
							src={CalvinKleinImage}
							loading='lazy'
							width={calvinKleinWidth}
							height={calvinKleinHeight}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}

export default LogoBar
