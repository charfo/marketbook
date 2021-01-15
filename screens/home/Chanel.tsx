import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Animated, Dimensions, FlatList, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CategoryCards, { CategoryCardsEnum, categoryCard_HEIGHT as DEFAULT_CARD_HEIGHT } from "../../Transformations/components/CategoryCards";

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const { height: wHeight } = Dimensions.get("window");
const height = wHeight - 64;
const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: "center",
  },
});


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [
  {
    type: CategoryCardsEnum.categoryCard1,
  },
  {
    type: CategoryCardsEnum.categoryCard2,
  },
  {
    type: CategoryCardsEnum.categoryCard3,
  },
  {
    type: CategoryCardsEnum.categoryCard4,
  },
  {
    type: CategoryCardsEnum.categoryCard5,
  },
  {
    type: CategoryCardsEnum.categoryCard6,
  },
];

const ChannelItems = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true, });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={true}
      data={cards}
      renderItem={({ index, item: { type } }) => (
        <Channel {...{ index, y, type }} />
      )}
      keyExtractor={(item) => item.index}
      {...{ onScroll }}
    />
  );
};



interface ChannelProps {
  y: Animated.Value;
  index: number;
  type: CategoryCards;
}

const Channel = ({ type, y, index }: ChannelProps) => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const navigation = useNavigation();

  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop + (10 * index), isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('ListItems', { type })}>

      <Animated.View
        style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
        key={index}
      >
        <CategoryCards {...{ type }} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};


export default ChannelItems;
