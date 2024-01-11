import {Container, Grid, Typography} from "@mui/material";
import styles from "./Article.module.scss"
import {data} from './config'

const Article = () => {
    return (
        <Container className={styles.wrap}>
            <Typography variant="h2" textTransform={"uppercase"} textAlign={"center"} mb={8}>BROWSE BY dress
                STYLE</Typography>
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