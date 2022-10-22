import { Container, FormHelperText, makeStyles, Typography } from "@material-ui/core"
import Carousel from "./Carousel";


const useStyles = makeStyles({
    banner: {
        backgroundImage: "url(./banner.jpg)",

    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
});

export default function Banner() {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                    variant="h2"
                    style={{
                        fontWeight: "Bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}
                    >
                        Crypto Hunter
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    style={{
                        color: "darkgray",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                    }}
                    >
                        Obtenha e analise todas as informações sobre sua criptomoeda favorita.
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
};