import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  container: {

  },
  inntertext: {
    top: CARD_HEIGHT/2, 
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 32,
    color: 'white',
    textShadowColor : 'darkgray', 
    textShadowOffset : {width: 4, height: 2}, 
    textShadowRadius: 1,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

export enum Cards {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
}

interface CardProps {
  type: Cards;
}

export default ({ type }: CardProps) => {
  let source: number;
  let title: string;
  switch (type) {
    case Cards.Card1:
      title = 'Comida preparada'
      source = require("../assets/card1.png");
      break;
    case Cards.Card2:
      title = 'Frutas y Verduras'
      source = require("../assets/card2.png");
      break;
    case Cards.Card3:
      title = 'Limpieza y Otros'
      source = require("../assets/card3.png");
      break;
    case Cards.Card4:
      title = 'Charcuteria'
      source = require("../assets/card4.png");
      break;
    case Cards.Card5:
      title = 'Lacteos y Postres'
      source = require("../assets/card5.png");
      break;
    case Cards.Card6:
      title = 'Carne y Pescado'
      source = require("../assets/card6.png");
      break;
    default:
      throw Error("Opcion no valida");
  }


  return <><View style={styles.container}><ImageBackground source={source} style={styles.card}><Text style={styles.inntertext}>Inside</Text></ImageBackground></View></>;
};
