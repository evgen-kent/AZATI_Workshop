import SubmitButton from '../button-auth/button-auth'
import Input from '../input-auth/input-auth'
import './login-wrapper.css'
import mailIcon from '../../assets/mui-email.svg'
import passIcon from '../../assets/mui-lock.svg'
import { Checkbox, Typography } from '@mui/material'

const Login = () => {
	return (
		<div className='login-wrapper'>
			<div className='label'>
				<Typography variant='h2'>LOG IN</Typography>
			</div>
			<Input content='Email' imgSrc1={mailIcon} typee='text'></Input>
			<Input content='Password' imgSrc1={passIcon} typee='password'></Input>
			<div className='remember'>
				<Checkbox sx={{ padding: 0 }}></Checkbox>
				<Typography className='text-remeber' display='inline' variant='body1'>
					Remember me
				</Typography>
			</div>
			<SubmitButton content='Log in'></SubmitButton>
			<p className='footer'>
				<Typography
					component='span'
					style={{ color: '#000000' }}
					variant='body1'
				>
					{'Don’t have an account? '}
					<Typography
						component='span'
						style={{ color: '#00000099' }}
						variant='body1'
					>
						Sign up
					</Typography>
				</Typography>
			</p>
		</div>
	)
}

export default Login
