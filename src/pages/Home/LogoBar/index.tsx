import { Box, List, ListItem, useMediaQuery } from '@mui/material'
import { THEME_COLOR_BLACK } from '../../../theme'
import VersaceImage from './../../../assets/img/versace-image.png'
import ZaraImage from './../../../assets/img/zara-image.png'
import GucciImage from './../../../assets/img/gucci-image.png'
import PradaImage from './../../../assets/img/prada-image.png'
import CalvinKleinImage from './../../../assets/img/calvin-klein-image.png'
import './styles.scss'

const LogoBar = (): JSX.Element => {
	const versaceWidth = useMediaQuery('(max-width: 390px)') ? 117 : 167
	const versaceHeight = useMediaQuery('(max-width: 390px)') ? 24 : 34
	const zaraWidth = useMediaQuery('(max-width: 390px)') ? 65 : 92
	const zaraHeight = useMediaQuery('(max-width: 390px)') ? 27 : 38
	const gucciWidth = useMediaQuery('(max-width: 390px)') ? 110 : 157
	const gucciHeight = useMediaQuery('(max-width: 390px)') ? 26 : 36
	const pradaWidth = useMediaQuery('(max-width: 390px)') ? 127 : 195
	const pradaHeight = useMediaQuery('(max-width: 390px)') ? 21 : 32
	const calvinKleinWidth = useMediaQuery('(max-width: 390px)') ? 135 : 208
	const calvinKleinHeight = useMediaQuery('(max-width: 390px)') ? 23 : 34

	return (
		<Box className='brands' bgcolor={THEME_COLOR_BLACK[100]}>
			<Box className='brands-wrapper'>
				<List className='brands-list' sx={{ padding: 0 }}>
					<ListItem
						sx={{
							width: `${versaceWidth}px`,
							height: `${versaceHeight}px`
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
							width: `${zaraWidth}px`,
							height: `${zaraHeight}px`
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
							width: `${gucciWidth}px`,
							height: `${gucciHeight}px`
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
							width: `${pradaWidth}px`,
							height: `${pradaHeight}px`
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
							width: `${calvinKleinWidth}px`,
							height: `${calvinKleinHeight}px`
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
