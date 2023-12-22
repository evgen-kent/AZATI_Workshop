import {Grid, Typography} from "@mui/material";
import styles from "./Article.module.scss"
import casual from '../../assets/images/casual.png'
import formal from '../../assets/images/formal.png'
import party from '../../assets/images/party.png'
import gym from '../../assets/images/gym.png'


const Article = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.article}>
                <Typography variant="h2">BROWSE BY dress STYLE</Typography>
                <Grid container spacing={10}>
                    <Grid item xs={12} lg={5}>
                        <a href="#" className={styles.item}>
                            <p>Casual</p>
                            <img src={casual} alt=""/>
                        </a>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <a href="#" className={styles.item}>
                            <p>Formal</p>
                            <img src={formal} alt=""/>
                        </a>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <a href="#" className={styles.item}>
                            <p>Party</p>
                            <img src={party} alt=""/>
                        </a>
                    </Grid>

                    <Grid item xs={12} lg={5}>
                        <a href="#" className={styles.item}>
                            <p>Gym</p>
                            <img src={gym} alt=""/>
                        </a>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Article;