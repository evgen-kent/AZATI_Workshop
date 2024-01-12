import Slider from 'react-slick'
import { ReviewCard } from '../review-card/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../../constants/carouselReview'

//сделал с помощью констант, кто-нибудь потом свяжет с беком

export const CarouselReview = () => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '50px',
		slidesToShow: 3,
		speed: 500
	}

	return (
		<>
			<Slider {...settings}>
				{data.map(item => (
					<ReviewCard
						name={item.user.username}
						precision={item.rate}
						text={item.review}
						key={item.id}
					></ReviewCard>
				))}
			</Slider>
		</>
	)
}
