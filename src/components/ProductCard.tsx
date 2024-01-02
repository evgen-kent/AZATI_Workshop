import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import style from '../styles/ProductCard.module.scss'
import { IProduct } from '../types/productCardType'

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
					<h3>{name}</h3>
					{/* в локальную бд не смог добавить поле цены , т.к похоже она не прописана */}
					<h4>120$</h4>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ProductCard
