import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../cryptoContext";

const useStyles = makeStyles({

});

export default function CoinPage() {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const { currency, symbol } = CryptoState();

    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));

      setCoin(data);
    };

    console.log(coin)

    useEffect(() => {
      fetchCoin();
    }, [])

    const classes = useStyles()

    return (
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <CoinInfo />
        </div>
      </div>
    )
  }