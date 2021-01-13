import { NavigationContainerRef, NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import { Alert, Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const { width, height } = Dimensions.get("window");
export const MIN_HEIGHT = height / 4;
export const MAX_HEIGHT = height / 4;

const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "500",
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT *1,
    justifyContent: "center",
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  subtitle: {
    color: "white",
    textAlign: "right",
    textAlignVertical: "bottom",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
  bgColor: string;
  category: number;
}

interface ItemProps {
  index: number;
  y: Animated.Value
  item: Item
}
//Todo meter dentro del animated view para obtener la imagen de background del item
//<Animated.Image source={picture} style={[styles.picture]}/>

const Item = ({
  index,
  y,
  item: { title, subtitle, picture, top, bgColor, category},
}: ItemProps) => {

  const navigation = useNavigation();
  const route = useRoute();
  

  function rotateTransform(index: number) {

    const offset = useRef(new Animated.Value(0)).current
    const insets = useSafeAreaInsets();

    return {
      transform: [{
        scale: offset.interpolate({
          inputRange: [1, MAX_HEIGHT + insets.top],
          outputRange: [1 + insets.top, insets.top + insets.top ],
          extrapolate: 'clamp'
        })
      }]
    };
  }


  return (

    <TouchableWithoutFeedback onPress={() => navigation.navigate('ListItems', {category})}>
      <Animated.View style={[styles.container, { backgroundColor: bgColor }, rotateTransform(index)]}>
        <View style={styles.titleContainer}>
          <View style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: "center",
            padding: 32,
            transform: [{ scale: 1 }],
          }}>
            <Animated.View>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
        <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
      </Animated.View>
    </TouchableWithoutFeedback >
  );
};

export default Item;
