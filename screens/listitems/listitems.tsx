import React from "react";
import { Animated, FlatList, Text } from "react-native";

import WalletCard from "../../Wallet/WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



export const assets = {
  'lechesemi.jpg': require('../../assets/products/lechesemi.jpg'),
  'alasdepollo.jpg': require('../../assets/products/alasdepollo.jpg'),
  'lecheentera.jpg': require('../../assets/products/lecheentera.jpg'),
  'lechedesnatada.jpg': require('../../assets/products/lechedesnatada.jpg'),
  'yogurt.jpg': require('../../assets/products/yogurt.jpg'),
  'yogurtliquido.jpg': require('../../assets/products/yogurtliquido.jpg'),
  'flan.jpg': require('../../assets/products/flan.jpg'),
  'quesosemi.jpg': require('../../assets/products/quesosemi.jpg'),
  'quesocurado.jpg': require('../../assets/products/quesocurado.jpg'),
  'quesofresco.jpg': require('../../assets/products/quesofresco.jpg'),
  'quesoazul.jpg': require('../../assets/products/quesoazul.jpg'),
  'platano.jpg': require('../../assets/products/platano.jpg'),
  'manzana.jpg': require('../../assets/products/manzana.jpg'),
  'pera.jpg': require('../../assets/products/pera.jpg'),
  'naranja.jpg': require('../../assets/products/naranja.jpg'),
  'lechuga.jpg': require('../../assets/products/lechuga.jpg'),
  'espinacas.jpg': require('../../assets/products/espinacas.jpg'),
  'salteadodeverduras.jpg': require('../../assets/products/salteadodeverduras.jpg'),
  'parrilladadeverduras.jpg': require('../../assets/products/parrilladadeverduras.jpg'),
  'aceitegirasol.jpg': require('../../assets/products/aceitegirasol.jpg'),
  'aceiteoliva.jpg': require('../../assets/products/aceiteoliva.jpg'),
  'sal.jpg': require('../../assets/products/sal.jpg'),
  'azucar.jpg': require('../../assets/products/azucar.jpg'),
  'macarrones.jpg': require('../../assets/products/macarrones.jpg'),
  'arroz.jpg': require('../../assets/products/arroz.jpg'),
  'fideos.jpg': require('../../assets/products/fideos.jpg'),
  'espagueti.jpg': require('../../assets/products/espagueti.jpg'),
  'pan.jpg': require('../../assets/products/pan.jpg'),
  'pandemolde.jpg': require('../../assets/products/pandemolde.jpg'),
  'chocolate.jpg': require('../../assets/products/chocolate.jpg'),
  'galletas.jpg': require('../../assets/products/galletas.jpg'),
  'tostadas.jpg': require('../../assets/products/tostadas.jpg'),
  'cola.jpg': require('../../assets/products/cola.jpg'),
  'zumonaranja.jpg': require('../../assets/products/zumonaranja.jpg'),
  'zumopina.jpg': require('../../assets/products/zumopina.jpg'),
  'agua.jpg': require('../../assets/products/agua.jpg'),
  'cerveza.jpg': require('../../assets/products/cerveza.jpg'),
  'gaseosa.jpg': require('../../assets/products/gaseosa.jpg'),
  'salchichas.jpg': require('../../assets/products/salchichas.jpg'),
  'salmonahumado.jpg': require('../../assets/products/salmonahumado.jpg'),
  'pechugadepollo.jpg': require('../../assets/products/pechugadepollo.jpg'),
  'chorizo.jpg': require('../../assets/products/chorizo.jpg'),
  'salchichon.jpg': require('../../assets/products/salchichon.jpg'),
  'jamon.jpg': require('../../assets/products/jamon.jpg'),
  'carnepicadacerdo.jpg': require('../../assets/products/carnepicadacerdo.jpg'),
  'pizzajamon.jpg': require('../../assets/products/pizzajamon.jpg'),
  'pizzaqueso.jpg': require('../../assets/products/pizzaqueso.jpg'),
  'caldodecocido.jpg': require('../../assets/products/caldodecocido.jpg'),
  'tortilladepatatas.jpg': require('../../assets/products/tortilladepatatas.jpg'),
  'fabadapreparada.jpg': require('../../assets/products/fabadapreparada.jpg'),
  'lentejaspreparadas.jpg': require('../../assets/products/lentejaspreparadas.jpg'),
  'garbanzospreparados.jpg': require('../../assets/products/garbanzospreparados.jpg'),
  'detergente.jpg': require('../../assets/products/detergente.jpg'),
  'jabonliquido.jpg': require('../../assets/products/jabonliquido.jpg'),
  'suavizante.jpg': require('../../assets/products/suavizante.jpg'),
  'limpiacristales.jpg': require('../../assets/products/limpiacristales.jpg'),
  'desodorantehombre.jpg': require('../../assets/products/desodorantehombre.jpg'),
  'desodorantemujer.jpg': require('../../assets/products/desodorantemujer.jpg'),
  'coloniafresca.jpg': require('../../assets/products/coloniafresca.jpg'),
  'toallitas.jpg': require('../../assets/products/toallitas.jpg'),
  'papelhigienico.jpg': require('../../assets/products/papelhigienico.jpg'),
  }

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
  "imagen": "zumopina.jpg",
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
  "imagen": "alasdepollo.jpg"
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


export enum CardsEnum { categoryCard1, categoryCard2, categoryCard3, categoryCard4, categoryCard5, categoryCard6, }

interface CardProps { cagtegoria: string, imagen:string, producto:string }


const ListItems = () => {
  
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  
  return (
    <>
      <AnimatedFlatList
        scrollEventThrottle={16}
        bounces={true}
        data={cards}
        renderItem={({ index, item: { categoria, imagen, producto } }) => (
          <WalletCard {...{ index, y, categoria, imagen, producto }} />
        )}
        keyExtractor={(item,producto) => producto}
        {...{ onScroll }}
      />
    </>
  );
};

export default ListItems;
