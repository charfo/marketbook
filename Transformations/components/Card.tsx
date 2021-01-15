import React from "react";
import { Asset } from 'expo-asset';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";


const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  container: {

  },
  inntertext: {
    top: CARD_HEIGHT / 2,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 32,
    color: 'white',
    textShadowColor: 'darkgray',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 1,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});


export const assets = {
  lechesemi : require('../../assets/products/lechesemi.jpg'),
  lecheentera : require('../../assets/products/lecheentera.jpg'),
  lechedesnatada : require('../../assets/products/lechedesnatada.jpg'),
  yogurt : require('../../assets/products/yogurt.jpg'),
  yogurtliquido : require('../../assets/products/yogurtliquido.jpg'),
  flan : require('../../assets/products/flan.jpg'),
  quesosemi : require('../../assets/products/quesosemi.jpg'),
  quesocurado : require('../../assets/products/quesocurado.jpg'),
  quesofresco : require('../../assets/products/quesofresco.jpg'),
  quesoazul : require('../../assets/products/quesoazul.jpg'),
  platano : require('../../assets/products/platano.jpg'),
  manzana : require('../../assets/products/manzana.jpg'),
  pera : require('../../assets/products/pera.jpg'),
  naranja : require('../../assets/products/naranja.jpg'),
  lechuga : require('../../assets/products/lechuga.jpg'),
  espinacas : require('../../assets/products/espinacas.jpg'),
  salteadodeverduras : require('../../assets/products/salteadodeverduras.jpg'),
  parrilladadeverduras : require('../../assets/products/parrilladadeverduras.jpg'),
  aceitegirasol : require('../../assets/products/aceitegirasol.jpg'),
  aceiteoliva : require('../../assets/products/aceiteoliva.jpg'),
  sal : require('../../assets/products/sal.jpg'),
  azucar : require('../../assets/products/azucar.jpg'),
  macarrones : require('../../assets/products/macarrones.jpg'),
  arroz : require('../../assets/products/arroz.jpg'),
  fideos : require('../../assets/products/fideos.jpg'),
  espagueti : require('../../assets/products/espagueti.jpg'),
  pan : require('../../assets/products/pan.jpg'),
  pandemolde : require('../../assets/products/pandemolde.jpg'),
  chocolate : require('../../assets/products/chocolate.jpg'),
  galletas : require('../../assets/products/galletas.jpg'),
  tostadas : require('../../assets/products/tostadas.jpg'),
  cola : require('../../assets/products/cola.jpg'),
  zumonaranja : require('../../assets/products/zumonaranja.jpg'),
  zumopina : require('../../assets/products/zumopina.jpg'),
  agua : require('../../assets/products/agua.jpg'),
  cerveza : require('../../assets/products/cerveza.jpg'),
  gaseosa : require('../../assets/products/gaseosa.jpg'),
  salchichas : require('../../assets/products/salchichas.jpg'),
  salmonahumado : require('../../assets/products/salmonahumado.jpg'),
  alasdepolo : require('../../assets/products/alasdepollo.jpg'),
  pechugadepollo : require('../../assets/products/pechugadepollo.jpg'),
  chorizo : require('../../assets/products/chorizo.jpg'),
  salchichon : require('../../assets/products/salchichon.jpg'),
  jamon : require('../../assets/products/jamon.jpg'),
  carnepicadacerdo : require('../../assets/products/carnepicadacerdo.jpg'),
  pizzajamon : require('../../assets/products/pizzajamon.jpg'),
  pizzaqueso : require('../../assets/products/pizzaqueso.jpg'),
  caldodecocido : require('../../assets/products/caldodecocido.jpg'),
  tortilladepatatas : require('../../assets/products/tortilladepatatas.jpg'),
  fabadapreparada : require('../../assets/products/fabadapreparada.jpg'),
  lentejaspreparadas : require('../../assets/products/lentejaspreparadas.jpg'),
  garbanzospreparados : require('../../assets/products/garbanzospreparados.jpg'),
  detergente : require('../../assets/products/detergente.jpg'),
  jabonliquido : require('../../assets/products/jabonliquido.jpg'),
  suavizante : require('../../assets/products/suavizante.jpg'),
  limpiacristales : require('../../assets/products/limpiacristales.jpg'),
  desodorantehombre : require('../../assets/products/desodorantehombre.jpg'),
  desodorantemujer : require('../../assets/products/desodorantemujer.jpg'),
  coloniafresca : require('../../assets/products/coloniafresca.jpg'),
  toallitas : require('../../assets/products/toallitas.jpg'),
  papelhigienico : require('../../assets/products/papelhigienico.jpg'),
 }



export enum CardEnum { lechesemi, lecheentera, lechedesnatada, yogurt, yogurtliquido, flan, quesosemi, quesocurado, quesofresco, quesoazul, platano, manzana, pera, naranja, lechuga, espinacas, salteadodeverduras, parrilladadeverduras, aceitegirasol, aceiteoliva, sal, azucar, macarrones, arroz, fideos, espagueti, pan, pandemolde, chocolate, galletas, tostadas, cola, zumonaranja, zumopina, agua, cerveza, gaseosa, salchichas, salmonahumado, alasdepollo, pechugadepollo, chorizo, salchichon, jamon, carnepicadacerdo, pizzajamon, pizzaqueso, caldodecocido, tortilladepatatas, fabadapreparada, lentejaspreparadas, garbanzospreparados, detergente, jabonliquido, suavizante, limpiacristales, desodorantehombre, desodorantemujer, coloniafresca, toallitas, papelhigienico }

interface CardProps { imagen: CardEnum; product: string; category: string; source: any; }

export default ({ imagen }: CardProps) => {
  let source = imagen.toString().substr(0,imagen.toString().lastIndexOf("."));
/*
  switch (imagen) {
    case CardEnum.lechesemi: source = require("../../assets/products/lechesemi.jpg"); break;
    case CardEnum.lecheentera: source = require("../../assets/products/lecheentera.jpg"); break;
    case CardEnum.lechedesnatada: source = require("../../assets/products/lechedesnatada.jpg"); break;
    case CardEnum.yogurt: source = require("../../assets/products/yogurt.jpg"); break;
    case CardEnum.yogurtliquido: source = require("../../assets/products/yogurtliquido.jpg"); break;
    case CardEnum.flan: source = require("../../assets/products/flan.jpg"); break;
    case CardEnum.quesosemi: source = require("../../assets/products/quesosemi.jpg"); break;
    case CardEnum.quesocurado: source = require("../../assets/products/quesocurado.jpg"); break;
    case CardEnum.quesofresco: source = require("../../assets/products/quesofresco.jpg"); break;
    case CardEnum.quesoazul: source = require("../../assets/products/quesoazul.jpg"); break;
    case CardEnum.platano: source = require("../../assets/products/platano.jpg"); break;
    case CardEnum.manzana: source = require("../../assets/products/manzana.jpg"); break;
    case CardEnum.pera: source = require("../../assets/products/pera.jpg"); break;
    case CardEnum.naranja: source = require("../../assets/products/naranja.jpg"); break;
    case CardEnum.lechuga: source = require("../../assets/products/lechuga.jpg"); break;
    case CardEnum.espinacas: source = require("../../assets/products/espinacas.jpg"); break;
    case CardEnum.salteadodeverduras: source = require("../../assets/products/salteadodeverduras.jpg"); break;
    case CardEnum.parrilladadeverduras: source = require("../../assets/products/parrilladadeverduras.jpg"); break;
    case CardEnum.aceitegirasol: source = require("../../assets/products/aceitegirasol.jpg"); break;
    case CardEnum.aceiteoliva: source = require("../../assets/products/aceiteoliva.jpg"); break;
    case CardEnum.sal: source = require("../../assets/products/sal.jpg"); break;
    case CardEnum.azucar: source = require("../../assets/products/azucar.jpg"); break;
    case CardEnum.macarrones: source = require("../../assets/products/macarrones.jpg"); break;
    case CardEnum.arroz: source = require("../../assets/products/arroz.jpg"); break;
    case CardEnum.fideos: source = require("../../assets/products/fideos.jpg"); break;
    case CardEnum.espagueti: source = require("../../assets/products/espagueti.jpg"); break;
    case CardEnum.pan: source = require("../../assets/products/pan.jpg"); break;
    case CardEnum.pandemolde: source = require("../../assets/products/pandemolde.jpg"); break;
    case CardEnum.chocolate: source = require("../../assets/products/chocolate.jpg"); break;
    case CardEnum.galletas: source = require("../../assets/products/galletas.jpg"); break;
    case CardEnum.tostadas: source = require("../../assets/products/tostadas.jpg"); break;
    case CardEnum.cola: source = require("../../assets/products/cola.jpg"); break;
    case CardEnum.zumonaranja: source = require("../../assets/products/zumonaranja.jpg"); break;
    case CardEnum.zumopina: source = require("../../assets/products/zumopina.jpg"); break;
    case CardEnum.agua: source = require("../../assets/products/agua.jpg"); break;
    case CardEnum.cerveza: source = require("../../assets/products/cerveza.jpg"); break;
    case CardEnum.gaseosa: source = require("../../assets/products/gaseosa.jpg"); break;
    case CardEnum.salchichas: source = require("../../assets/products/salchichas.jpg"); break; 
    case CardEnum.salmonahumado: source = require("../../assets/products/salmonahumado.jpg"); break;
    case CardEnum.alasdepollo: source = require("../../assets/products/alasdepollo.jpg"); break;
    case CardEnum.pechugadepollo: source = require("../../assets/products/pechugadepollo.jpg"); break;
    case CardEnum.chorizo: source = require("../../assets/products/chorizo.jpg"); break;
    case CardEnum.salchichon: source = require("../../assets/products/salchichon.jpg"); break;
    case CardEnum.jamon: source = require("../../assets/products/jamon.jpg"); break;
    case CardEnum.carnepicadacerdo: source = require("../../assets/products/carnepicadacerdo.jpg"); break;
    case CardEnum.pizzajamon: source = require("../../assets/products/pizzajamon.jpg"); break;
    case CardEnum.pizzaqueso: source = require("../../assets/products/pizzaqueso.jpg"); break;
    case CardEnum.caldodecocido: source = require("../../assets/products/caldodecocido.jpg"); break;
    case CardEnum.tortilladepatatas: source = require("../../assets/products/tortilladepatatas.jpg"); break;
    case CardEnum.fabadapreparada: source = require("../../assets/products/fabadapreparada.jpg"); break;
    case CardEnum.lentejaspreparadas: source = require("../../assets/products/lentejaspreparadas.jpg"); break;
    case CardEnum.garbanzospreparados: source = require("../../assets/products/garbanzospreparados.jpg"); break;
    case CardEnum.detergente: source = require("../../assets/products/detergente.jpg"); break;
    case CardEnum.jabonliquido: source = require("../../assets/products/jabonliquido.jpg"); break;
    case CardEnum.suavizante: source = require("../../assets/products/suavizante.jpg"); break;
    case CardEnum.limpiacristales: source = require("../../assets/products/limpiacristales.jpg"); break;
    case CardEnum.desodorantehombre: source = require("../../assets/products/desodorantehombre.jpg"); break;
    case CardEnum.desodorantemujer: source = require("../../assets/products/desodorantemujer.jpg"); break;
    case CardEnum.coloniafresca: source = require("../../assets/products/coloniafresca.jpg"); break;
    case CardEnum.toallitas: source = require("../../assets/products/toallitas.jpg"); break;
    case CardEnum.papelhigienico: source = require("../../assets/products/papelhigienico.jpg"); break;
  }
*/
  return <><View style={styles.container}><ImageBackground source={assets[source]} style={styles.card}><Text style={styles.inntertext}>Inside</Text></ImageBackground></View></>;
};
