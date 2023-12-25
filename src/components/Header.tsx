import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import InputBar from './InputBar'
import { useState } from 'react'
import ModalForm from './ModalForm'

const pages = ['Shop', 'On Sale', 'New Arrivals', 'Brands']

const Header = (): JSX.Element => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<div>
			<AppBar
				sx={{ padding: '10px 60px', backgroundColor: 'white' }}
				position='static'
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex', alignItems: 'center' }
							}}
						>
							<Button
								component='a'
								href='#app-bar-with-responsive-menu'
								sx={{
									mr: 2,
									fontSize: '32px',
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'IntegralCF-Bold',
									fontWeight: 700,
									letterSpacing: '.3rem',
									textDecoration: 'none',
									textTransform: 'uppercase',
									textAlign: 'center',
									padding: '0px',
									color: 'black'
								}}
							>
								shop.co
							</Button>
							<div style={{ display: 'flex', marginLeft: '40px' }}>
								{pages.map(page => (
									<Button
										key={page}
										sx={{
											display: 'block',
											padding: '13px 5px 0px 5px',
											textTransform: 'none',
											marginRight: '10px',
											fontSize: '16px',
											fontFamily: 'Satoshi-Medium',
											color: 'black'
										}}
									>
										{page}
									</Button>
								))}
							</div>
							<InputBar
								mrLeft='30px'
								backgroundColor='#DDD9DB'
								Icon={IoSearch}
								placeholder='Search'
								width='575px'
								type='input'
							/>
						</Box>
						<Box sx={{ flexGrow: 0 }}>
							<Button sx={{ color: 'black', padding: '13px 0px 0px 0px' }}>
								<FiShoppingCart fontSize={20} />
							</Button>
							<Button
								onClick={handleOpen}
								sx={{ color: 'black', padding: '13px 0px 0px 0px' }}
							>
								<FaRegCircleUser fontSize={20} />
							</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<ModalForm type='login' open={open} handleClose={handleClose} />
		</div>
	)
}

export default Header
