import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { IconType } from 'react-icons'
import { useState } from 'react'

type SearchProps = {
	Icon: IconType
	placeholder: string
	backgroundColor: string
	width: string
	mrLeft: string
	type: 'password' | 'input'
	SecondIcon?: IconType
	ThirdIcon?: IconType
}

const Search = styled('div')(
	({
		backgroundColor,
		width,
		mrLeft
	}: {
		backgroundColor: string
		width: string
		mrLeft: string
	}) => ({
		marginLeft: mrLeft,
		borderRadius: '30px',
		backgroundColor: backgroundColor,
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		width: width,
		height: '40px',
		color: 'black',
		marginTop: '10px',
		'&:hover': {
			backgroundColor: alpha(backgroundColor, 0.85)
		}
	})
)

const SearchIconWrapper = styled('div')(() => ({
	height: '100%',
	position: 'absolute',
	padding: '0 15px',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(() => ({
	color: 'inherit',
	width: '100%',
	paddingLeft: '40px',
	paddingRight: '40px',
	paddingTop: '3px',
	height: '100%',
	fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(', ')
}))

const InputBar = ({
	Icon,
	SecondIcon,
	ThirdIcon,
	placeholder,
	backgroundColor,
	width,
	mrLeft,
	type
}: SearchProps): JSX.Element => {
	const [inputType, setInputType] = useState(type)

	const toggleInputType = () => {
		setInputType(inputType === 'password' ? 'input' : 'password')
	}
	return (
		<>
			<Search
				key={'SearchBarComponent-root'}
				style={{ width: width, height: '40px' }}
				className={`SearchBarComponent-root}`}
				backgroundColor={backgroundColor}
				width={width}
				mrLeft={mrLeft}
			>
				<SearchIconWrapper>
					<Icon />
				</SearchIconWrapper>
				<StyledInputBase placeholder={placeholder} type={inputType} />
				{SecondIcon && ThirdIcon && (
					<div
						style={{
							marginRight: '30px',
							marginTop: '5px',
							cursor: 'pointer'
						}}
						onClick={toggleInputType}
					>
						{inputType === 'password' ? <SecondIcon /> : <ThirdIcon />}
					</div>
				)}
			</Search>
		</>
	)
}

export default InputBar
