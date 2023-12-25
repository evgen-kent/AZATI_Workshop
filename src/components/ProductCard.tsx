import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import style from '../styles/ProductCard.module.scss'
import RatingBar from './UI/RatingBar'

type productCardProps = {
	img: string
	title: string
	price: string
}

const ProductCard = ({ img, title, price }: productCardProps): JSX.Element => {
	return (
		<Card className={style.card}>
			<CardActionArea>
				<CardMedia
					className={style.img}
					component='img'
					image={img}
					alt='green iguana'
				/>
				{/* здесь должен быть компонент рейтинга */}
				<CardContent className={style.card_content}>
					<h3>{title}</h3>
					<RatingBar name='rating' />
					<h4>{price}</h4>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ProductCard
