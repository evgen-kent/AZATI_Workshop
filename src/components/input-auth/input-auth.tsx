import TextInput from '../UI/text-input/index'
import './input-auth.css'

interface InputProps {
	imgSrc1: string
	imgSrc2?: string
	content: string
	typee: string
}

const Input: React.FC<InputProps> = ({
	imgSrc1,
	imgSrc2,
	content,
	typee
}: InputProps) => {
	let classInput
	switch (content) {
		case 'Password':
			classInput = 'passw'
			break
		case 'Email':
			classInput = 'mail'
			break
		case 'Repeat password':
			classInput = 'repeat-passw'
			break
	}
	return (
		<div className={`input-auth ${classInput}`}>
			<div className='svg-icon'>
				<img className='union' alt='Union' src={imgSrc1} />
			</div>
			<input
				type={typee}
				className='text-wrapper'
				placeholder={content}
			></input>
			<TextInput
				className='text-wrapper'
				width={326}
				type={typee}
				placeholder={content}
			></TextInput>
			{imgSrc2 && (
				<div className='svg-icon'>
					<img className='eye' alt='Eye' src={imgSrc2} />
				</div>
			)}
		</div>
	)
}

export default Input
