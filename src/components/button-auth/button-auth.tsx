import { Typography } from '@mui/material'
import './button-auth.css'

type Content = string
type SubmitButtonProps = {
	content: Content
}

const SubmitButton = ({ content }: SubmitButtonProps) => {
	return (
		<div className={`submit-button ${content == 'Log in' ? 'login' : 'reg'}`}>
			<Typography variant='button' className='text-wrapper'>
				{content}
			</Typography>
		</div>
	)
}

export default SubmitButton
