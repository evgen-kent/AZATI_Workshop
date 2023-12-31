import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material'
import style from '../styles/ProductCard.module.scss'

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
					<Typography variant='subtitle1'>{title}</Typography>
					<Typography component='span'>{price}</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ProductCard
