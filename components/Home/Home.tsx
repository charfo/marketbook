
import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View, ImageBackground, Animated, useWindowDimensions, Dimensions, Alert } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const images = new Array(16).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
const { height, width } = Dimensions.get('window')

const pan = useRef(new Animated.ValueXY()).current;


export const MIN_HEIGHT = 64;
export const MAX_HEIGHT = height / 2;

export interface Item {
    title: string;
    subtitle: string;
    picture: number;
    top: number;
}

interface ItemProps {
    index: number;
    y: Animated.Value;
    item: Item;
}



export const Categories = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={false}
                    style={styles.scrollViewStyle}
                    pagingEnabled
                    snapToInterval={MAX_HEIGHT}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY
                                }
                            }
                        }
                    ])}
                    scrollEventThrottle={1}
                >
                    {images.map((image, imageIndex) => {
                        return (
                            <View
                                style={{ width: width, height: 250 }}
                                key={imageIndex}
                            >
                                <ImageBackground source={{ uri: image }} style={styles.card}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.infoText}>
                                            {"Image - " + imageIndex}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>
                
            </View>
        </SafeAreaView>
    );
}

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
        maxHeight: MAX_HEIGHT * 0.61,
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
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },

    scrollContainer: {
        height: height,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(0,0,0, 0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollViewStyle: {}/*
    opacity: 0.5, //this.state.fadeAnim Binds directly
    transform: [{
      translateY: this.state.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
    }],
  }*/
});

export const items = [
    {
        title: "Upcoming Show Live from Paris",
        subtitle: "SPRING-SUMMER 2021",
        picture: require("./assets/chanel.jpg"),
        top: 0,
    },
    {
        title: "In Boutiques",
        subtitle: "FALL-WINTER 2020/21",
        picture: require("./assets/sonnie-hiles-pU4J5VFnqCQ-unsplash-with-gradient.jpg"),
        top: 0,
    },
    {
        title: "Deauville Film Festival",
        subtitle: "CHANEL IN CINEMA",
        picture: require("./assets/laura-chouette-NFrPPyGe5q0-unsplash-with-gradient.jpg"),
        top: 0,
    },
    {
        title: "IN BOUTIQUES",
        subtitle: "Métiers d'art 2019/20",
        picture: require("./assets/butsarakham-buranaworachot-au6Gddf1pZQ-unsplash.jpg"),
        top: 0,
    },
    {
        title: "Haute Couture",
        subtitle: "FALL-WINTER 2020/21",
        picture: require("./assets/khaled-ghareeb-upepKTbwm3A-unsplash.jpg"),
        top: 50,
    },
    {
        title: "Balade en Méditerranée",
        subtitle: "CRUISE 2020/21",
        picture: require("./assets/christopher-campbell-A3QXXEfcA1U-unsplash.jpg"),
        top: 0,
    },
    {
        title: "Spring-Summer 2020 Campaign",
        subtitle: "EYEWEAR",
        picture: require("./assets/chase-fade-Pb13EUxzMDw-unsplash.jpg"),
        top: 0,
    },
];


const Item = ({
    y,
    index,
    item: { title, subtitle, picture, top },
}: ItemProps) => {

    return (
        <TouchableHighlight onPress={() => Alert.alert("Pressed!")}>
            <Animated.View style={[styles.container]}>
                <Animated.Image
                    source={picture}
                    style={[styles.picture]}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
                    <View style={styles.mainTitle}>
                        <Animated.View style={styles.card }>
                            <Text style={styles.title}>{title.toUpperCase()}</Text>
                        </Animated.View>
                    </View>
                </View>
            </Animated.View>
        </TouchableHighlight>
    );
};

export default Item;
