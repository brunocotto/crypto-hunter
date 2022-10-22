import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../cryptoContext";

const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
  }));

export default function Carousel() {
    const [trending, setTrending] = useState([]);
    const classes = useStyles();

    const { currency } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        
        setTrending(data)
    };

    console.log(trending);

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency])

    return (
        <div className={classes.carousel}>carousel</div>
    )
}