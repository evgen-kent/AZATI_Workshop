import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import style from './product-card.module.scss'
import RatingBar from '../UI/rating-bar'

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
				<CardContent className={style.card_content}>
					<h3>{title}</h3>
					<RatingBar name='read' />
					<h4>{price}</h4>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ProductCard
