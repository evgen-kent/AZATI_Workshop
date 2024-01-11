import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import style from './modal-form.module.scss'
import InputBar from '../input-bar/input-bar'
import { TfiEmail } from 'react-icons/tfi'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { registrationAction } from '../../store/registration/registrationThunk'
import { loginAction } from '../../store/login/loginThunk'

type Props = {
	open: boolean
	handleClose: () => void
	type: 'login' | 'signup' | 'form'
}

const ModalForm = ({ open, handleClose, type }: Props): JSX.Element => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [inputType, setInputType] = useState(type)
	const dispatch = useDispatch<AppDispatch>()
	const [text, setText] = useState('')
	const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	const handleRegistration = () => {
		setText('')
		dispatch(registrationAction({ email, password }))
		handleClose()
	}
	const handleLogin = () => {
		setText('')
		dispatch(loginAction({ email, password }))
		handleClose()
	}
	const toggleInputType = () => {
		switch (inputType) {
			case 'login':
				setInputType('signup')
				break
			case 'signup':
				setInputType('login')
				break
			default:
				setInputType('login')
		}
	}

	return (
		<Modal
			keepMounted
			open={open}
			onClose={handleClose}
			aria-labelledby='keep-mounted-modal-title'
			aria-describedby='keep-mounted-modal-description'
		>
			<Box className={style.box} sx={style}>
				{inputType === 'signup' && (
					<>
						<h3>Sign UP</h3>
						<InputBar
							mrLeft='0px'
							Icon={TfiEmail}
							placeholder='Enter your email address'
							backgroundColor='#ffffff'
							width='325px'
							type='input'
							setValue={changeEmail}
						/>
						<InputBar
							mrLeft='0px'
							Icon={MdLock}
							placeholder='Enter your password'
							backgroundColor='#ffffff'
							width='325px'
							SecondIcon={IoEyeSharp}
							ThirdIcon={IoEyeOff}
							type='password'
							setValue={changePass}
						/>
						<InputBar
							type='password'
							mrLeft='0px'
							Icon={MdLock}
							placeholder='Repeat your password'
							backgroundColor='#ffffff'
							width='325px'
							SecondIcon={IoEyeSharp}
							ThirdIcon={IoEyeOff}
						/>
						<button
							onClick={() => handleRegistration()}
							className={style.button}
						>
							Sign Up
						</button>
						<div style={{ cursor: 'pointer' }} onClick={toggleInputType}>
							Already have an account? Log in
						</div>
					</>
				)}
				{inputType === 'login' && (
					<>
						<h3>Log In</h3>
						<InputBar
							mrLeft='0px'
							Icon={TfiEmail}
							placeholder='Enter your email address'
							backgroundColor='#ffffff'
							width='325px'
							type='input'
							setValue={changeEmail}
						/>
						<InputBar
							mrLeft='0px'
							Icon={MdLock}
							placeholder='Enter your password'
							backgroundColor='#ffffff'
							width='325px'
							SecondIcon={IoEyeSharp}
							ThirdIcon={IoEyeOff}
							type='password'
							setValue={changePass}
						/>
						<button onClick={() => handleLogin()} className={style.button}>
							Log In
						</button>
						<div style={{ cursor: 'pointer' }} onClick={toggleInputType}>
							Don’t have an account? Sign up
						</div>
					</>
				)}
				{inputType === 'form' && (
					<>
						<h3>Review</h3>
						<textarea
							value={text}
							onChange={e => setText(e.target.value)}
							className={style.textArea}
						/>
						<button>Send review</button>
					</>
				)}
			</Box>
		</Modal>
	)
}

export default ModalForm
