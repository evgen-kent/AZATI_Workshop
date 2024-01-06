import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material'
import style from '../styles/ProductCard.module.scss'
import { IProduct } from '../../types/productCardType'

const ProductCard = ({ image, name }: IProduct): JSX.Element => {
	return (
		<Card className={style.card}>
			<CardActionArea>
				<CardMedia
					className={style.img}
					component='img'
					image={image}
					alt='green iguana'
				/>
				{/* здесь должен быть компонент рейтинга */}
				<CardContent className={style.card_content}>
					<Typography variant='subtitle1'>{name}</Typography>
					{/* в локальную бд не смог добавить поле цены , т.к похоже она не прописана */}
					<Typography component='span'>120$</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ProductCard
