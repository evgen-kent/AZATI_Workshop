import { useId } from 'react'
import {
	footerCredits,
	footerList,
	footerSocials
} from '../constants/Footer.ts'
import style from '../styles/Footer.module.scss'
import InputBar from './InputBar.tsx'
import { TfiEmail } from 'react-icons/tfi'
import { Button, List, ListItemText, Typography } from '@mui/material'
import { white } from '../theme.ts'

const Footer = (): JSX.Element => {
	const id = useId()
	return (
		<div className={style.wrapper}>
			<div className={style.form}>
				<Typography style={{ color: white }} variant='h3'>
					STAY UPTO DATE ABOUT OUR LATEST OFFERS
				</Typography>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'baseline',
						justifyContent: 'center'
					}}
				>
					<InputBar
						mrLeft='0px'
						type='input'
						Icon={TfiEmail}
						placeholder='Enter your email address'
						backgroundColor='#ffffff'
						width='355px'
					/>
					<Button
						className={style.button_subscribe}
						sx={{
							fontSize: '16px',
							fontWeight: '400',
							letterSpacing: '-0.64px',
							borderRadius: '50px',
							marginTop: '20px',
							backgroundColor: 'white',
							color: 'black',
							textTransform: 'none',
							padding: '20px 90px'
						}}
						variant='contained'
					>
						Subscribe to Newsletter
					</Button>
				</div>
			</div>
			<div className={style.footer}>
				<div className={style.list_row}>
					<div className={style.list_block}>
						<Typography variant='h3' style={{ margin: '52px 0 25px 0' }}>
							shop.co
						</Typography>
						<Typography component='p'>
							We have clothes that suits your style and which you’re proud to
							wear. From women to men.
						</Typography>
						<ul className={style.socials_icons}>
							{footerSocials.map(social => {
								const Icon = social.icon
								return (
									<li key={id}>
										<Icon />
									</li>
								)
							})}
						</ul>
					</div>
					{footerList.map(item => (
						<div key={id} className={style.list_block}>
							<Typography
								component='h3'
								className={style.list_h3}
								style={{ marginTop: '30px' }}
							>
								{item.title}
							</Typography>
							<List className={style.list_links} style={{ paddingTop: '26px' }}>
								{item.list.map((listItem, listIndex) => (
									<ListItemText key={listIndex}>{listItem}</ListItemText>
								))}
							</List>
						</div>
					))}
				</div>
				<div className={style.copy}>
					<Typography component='p'>
						Shop.co © 2000-2023, All Rights Reserved
					</Typography>
					<ul>
						{footerCredits.map(social => {
							return (
								<li key={id}>
									<img src={social.icon} alt='' />
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
