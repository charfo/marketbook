import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 18 / 36;
export const categoryCard_WIDTH = width * 0.95;
export const categoryCard_HEIGHT = categoryCard_WIDTH * ratio;
const styles = StyleSheet.create({
  container: {
    direction:"rtl"
  },
  inntertext: {
    top: categoryCard_HEIGHT / 2,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 32,
    color: 'white',
    textShadowColor: 'black',
    shadowOpacity: .5,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  categoryCard: {
    width: categoryCard_WIDTH,
    height: categoryCard_HEIGHT,
    borderRadius: 50,
    display: "flex"
  },
});

export enum CategoryCardsEnum { categoryCard1, categoryCard2, categoryCard3, categoryCard4, categoryCard5, categoryCard6, }

interface CategoryCardProps { type: CategoryCardsEnum; }

export default ({ type }: CategoryCardProps) => {
  let source: number;
  let title: string;
  switch (type) {
    case CategoryCardsEnum.categoryCard1:
      title = 'Comida preparada'
      source = require("../assets/carne.jpg");
      break;
    case CategoryCardsEnum.categoryCard2:
      title = 'Frutas y Verduras'
      source = require("../assets/frutas.jpg");
      break;
    case CategoryCardsEnum.categoryCard3:
      title = 'Limpieza y Otros'
      source = require("../assets/drogueria.jpg");
      break;
    case CategoryCardsEnum.categoryCard4:
      title = 'Charcuteria'
      source = require("../assets/carne.jpg");
      break;
    case CategoryCardsEnum.categoryCard5:
      title = 'Lacteos y Postres'
      source = require("../assets/frutas.jpg");
      break;
    case CategoryCardsEnum.categoryCard6:
      title = 'Carne y Pescado'
      source = require("../assets/pescado.jpg");
      break;
    default:
      throw Error("Opcion no valida");
  }


  return (
    <View style={styles.container}>

      <ImageBackground source={source} style={styles.categoryCard}>
        <View style={{ borderRadius: 25, backgroundColor:"red" }}>
          <Text style={styles.inntertext}>{title}</Text>
        </View>
      </ImageBackground>

    </View>
  );
};
