import SubmitButton from '../button-auth/button-auth'
import Input from '../input-auth/input-auth'
import './singup-wrapper.css'
import mailIcon from '../../assets/mui-mail.svg'
import passIcon from '../../assets/mui-lock.svg'
import eyeIcon from '../../assets/mui-eye.svg'
import { Typography } from '@mui/material'

const SignUp = () => {
	return (
		<div className='sign-wrapper'>
			<div className='label'>SIGN UP</div>
			<Typography className='label' variant='h2'>
				SIGN UP
			</Typography>
			<Input content='Email' imgSrc1={mailIcon} typee='text'></Input>
			<Input
				content='Password'
				imgSrc1={passIcon}
				imgSrc2={eyeIcon}
				typee='password'
			></Input>
			<Input
				content='Repeat password'
				imgSrc1={passIcon}
				imgSrc2={eyeIcon}
				typee='password'
			></Input>
			<SubmitButton content='Sign up'></SubmitButton>
			<p className='footer'>
				<Typography
					component='span'
					style={{ color: '#000000' }}
					variant='body1'
				>
					{'Already have an account? '}
					<Typography
						component='span'
						style={{ color: '#00000099' }}
						variant='body1'
					>
						Log in
					</Typography>
				</Typography>
			</p>
		</div>
	)
}

export default SignUp
