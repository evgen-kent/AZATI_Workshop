import {Container, Grid, Typography} from "@mui/material";
import styles from "./Article.module.scss"
import casual from '../../assets/images/article/casual.png'
import formal from '../../assets/images/article/formal.png'
import party from '../../assets/images/article/party.png'
import gym from '../../assets/images/article/gym.png'

const data = [
    {
        title: "Casual",
        image: casual
    },
    {
        title: "Formal",
        image: formal
    },
    {
        title: "Party",
        image: party
    },
    {
        title: "Gym",
        image: gym
    }
]

const Article = () => {
    return (
        <Container className={styles.wrap}>
            <Typography variant="h2" textTransform={"uppercase"} textAlign={"center"} mb={8}>BROWSE BY dress STYLE</Typography>
            <Grid container spacing={2}>
                {data.map((item, idx) => (
                    <Grid item xs={12} lg={idx % 3 > 0 ? 7 : 5}>
                        <a href="#" className={styles.item}>
                            <Typography
                                mt={4} ml={4} fontSize={36} fontWeight={700} color={"black"}>
                                {item.title}
                            </Typography>
                            <img src={item.image} alt=""/>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Article;