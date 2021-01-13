import React from "react";
import { Animated, FlatList } from "react-native";

import { Cards } from "../../Transformations/components/Card";
import WalletCard from "../../Wallet/WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [{
  "categoria": "lacteos",
  "producto": "leche semi",
  "imagen": "lechesemi.jpg"
}, {
  "categoria": "lacteos",
  "producto": "leche entera",
  "imagen": "lecheentera.jpg"
}, {
  "categoria": "lacteos",
  "producto": "leche desnatada",
  "imagen": "lechedesnatada.jpg"
}, {
  "categoria": "lacteos",
  "producto": "yogur",
  "imagen": "yogurt.jpg"
}, {
  "categoria": "lacteos",
  "producto": "yogur liquido",
  "imagen": "yogurtliquido.jpg"
}, {
  "categoria": "lacteos",
  "producto": "flan",
  "imagen": "flan.jpg"
}, {
  "categoria": "lacteos",
  "producto": "queso semi",
  "imagen": "quesosemi.jpg"
}, {
  "categoria": "lacteos",
  "producto": "queso curado",
  "imagen": "quesocurado.jpg"
}, {
  "categoria": "lacteos",
  "producto": "queso fresco",
  "imagen": "quesofresco.jpg"
}, {
  "categoria": "lacteos",
  "producto": "queso azul",
  "imagen": "quesoazul.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "platano",
  "imagen": "platano.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "manzana",
  "imagen": "manzana.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "pera",
  "imagen": "pera.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "naranja",
  "imagen": "naranja.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "lechuga",
  "imagen": "lechuga.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "espinacas",
  "imagen": "espinacas.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "salteado de verduras",
  "imagen": "salteadodeverduras.jpg"
}, {
  "categoria": "frutas y verduras",
  "producto": "parrillada de verduras",
  "imagen": "parrilladadeverduras.jpg"
}, {
  "categoria": "esenciales",
  "producto": "aceite girasol",
  "imagen": "aceitegirasol.jpg"
}, {
  "categoria": "esenciales",
  "producto": "aceite oliva",
  "imagen": "aceiteoliva.jpg"
}, {
  "categoria": "esenciales",
  "producto": "sal",
  "imagen": "sal.jpg"
}, {
  "categoria": "esenciales",
  "producto": "azucar",
  "imagen": "azucar.jpg"
}, {
  "categoria": "esenciales",
  "producto": "macarrones",
  "imagen": "macarrones.jpg"
}, {
  "categoria": "esenciales",
  "producto": "arroz",
  "imagen": "arroz.jpg"
}, {
  "categoria": "esenciales",
  "producto": "fideos",
  "imagen": "fideos.jpg"
}, {
  "categoria": "esenciales",
  "producto": "espagueti",
  "imagen": "espagueti.jpg"
}, {
  "categoria": "panaderia y desayuno",
  "producto": "pan",
  "imagen": "pan.jpg"
}, {
  "categoria": "panaderia y desayuno",
  "producto": "pan de molde",
  "imagen": "pandemolde.jpg"
}, {
  "categoria": "panaderia y desayuno",
  "producto": "chocolate",
  "imagen": "chocolate.jpg"
}, {
  "categoria": "panaderia y desayuno",
  "producto": "galletas",
  "imagen": "galletas.jpg"
}, {
  "categoria": "panaderia y desayuno",
  "producto": "tostadas",
  "imagen": "tostadas.jpg"
}, {
  "categoria": "bebidas",
  "producto": "cola",
  "imagen": "cola.jpg"
}, {
  "categoria": "bebidas",
  "producto": "zumo naranja",
  "imagen": "zumonaranja.jpg"
}, {
  "categoria": "bebidas",
  "producto": "zumo pi\u00f1a",
  "imagen": "zumopina.jpg"
}, {
  "categoria": "bebidas",
  "producto": "agua",
  "imagen": "agua.jpg"
}, {
  "categoria": "bebidas",
  "producto": "cerveza",
  "imagen": "cerveza.jpg"
}, {
  "categoria": "bebidas",
  "producto": "gaseosa",
  "imagen": "gaseosa.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "salchichas",
  "imagen": "salchichas.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "salmon ahumado",
  "imagen": "salmonahumado.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "alas de pollo",
  "imagen": "alasdepolo.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "pechuga de pollo",
  "imagen": "pechugadepollo.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "chorizo",
  "imagen": "chorizo.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "salchichon",
  "imagen": "salchichon.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "jamon",
  "imagen": "jamon.jpg"
}, {
  "categoria": "charcuteria",
  "producto": "carne picada cerdo",
  "imagen": "carnepicadacerdo.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "pizza jamon",
  "imagen": "pizzajamon.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "pizza queso",
  "imagen": "pizzaqueso.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "caldo de cocido",
  "imagen": "caldodecocido.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "tortilla de patata",
  "imagen": "tortilladepatatas.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "fabada preparada",
  "imagen": "fabadapreparada.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "lentejas preparadas",
  "imagen": "lentejaspreparadas.jpg"
}, {
  "categoria": "comida preparada",
  "producto": "garbanzos preparados",
  "imagen": "garbanzospreparados.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "detergente",
  "imagen": "detergente.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "jabon",
  "imagen": "jabonliquido.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "suavizante",
  "imagen": "suavizante.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "limpiacristales",
  "imagen": "limpiacristales.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "desodorante hombre",
  "imagen": "desodorantehombre.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "desodorante mujer",
  "imagen": "desodorantemujer.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "colonia  fresca",
  "imagen": "coloniafresca.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "toallitas",
  "imagen": "toallitas.jpg"
}, {
  "categoria": "limpieza e higiene",
  "producto": "papel higienico",
  "imagen": "papelhigienico.jpg"
}
]


const ListItems = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={true}
      data={cards}
      renderItem={({ index, item: { type } }) => (
        <WalletCard {...{ index, y, type }} />
      )}
      keyExtractor={(item) => item.index}
      {...{ onScroll }}
    />
  );
};

export default ListItems;
