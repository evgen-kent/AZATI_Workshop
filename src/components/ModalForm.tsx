import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import style from '../styles/ModalForm.module.scss'
import InputBar from './InputBar'
import { TfiEmail } from 'react-icons/tfi'
import { IoEyeSharp } from 'react-icons/io5'
import { IoEyeOff } from 'react-icons/io5'
import { MdLock } from 'react-icons/md'

type Props = {
	open: boolean
	handleClose: () => void
	type: 'login' | 'signup' | 'form'
}

const ModalForm = ({ open, handleClose, type }: Props): JSX.Element => {
	const [inputType, setInputType] = useState(type)
	const [text, setText] = useState('')

	const handleClear = () => {
		setText('')
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
						<button className={style.button} onClick={handleClear}>
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
						/>
						<button className={style.button} onClick={handleClear}>
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
						<button onClick={handleClear}>Send review</button>
					</>
				)}
			</Box>
		</Modal>
	)
}

export default ModalForm
