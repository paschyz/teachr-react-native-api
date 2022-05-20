import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Avatar } from "react-native-paper";

import Carousel from "react-native-snap-carousel";
import { TouchableOpacity } from "react-native-web";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      name: "Pierre du Parc de Locmania",
      formation: "Université Paris Dauphine",
      description:
        "Calme et patient, je sais m'adapter à l'élève,feznzjnfejnfzejnfenzeni ni nifzize n finz fezi",
    },
    {
      name: "Name 2",
      formation: "Formation 2",
      description: "Description 5",
    },
    {
      name: "Name 3",
      formation: "Formation 3",
      description: "Description 5",
    },
    {
      name: "Name 4",
      formation: "Formation 4",
      description: "Description 5",
    },
    {
      name: "Name 5",
      formation: "Formation 5",
      description: "Description 5",
    },
  ]);

  function _renderItem({ item, index }) {
    const formationText = "Formation";
    const descriptionText = "Description";
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 400,
          padding: 25,
          marginLeft: 32,
          marginRight: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Avatar.Image
            size={55}
            source={require("C:/Users/d/Downloads/teachr/images/apple.jpg")}
          />
          <Text style={{ fontSize: 22, marginLeft: 15 }}>{item.name}</Text>
        </View>
        <Text style={{ marginTop: 35, color: "grey" }}>{formationText}</Text>
        <Text style={{ marginTop: 5, lineHeight: 20, fontWeight: "bold" }}>
          {item.formation}
        </Text>
        <Text style={{ marginTop: 30 }}>{descriptionText}</Text>
        <Text style={{ marginTop: 5, lineHeight: 20, fontWeight: "bold" }}>
          {item.description}
        </Text>
        {/* <TouchableOpacity color="black" backgroundColor="red">
          <Text>Login</Text>
        </TouchableOpacity> */}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rebeccapurple", paddingTop: 50 }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          // ref={ref => this.carousel = ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={310}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
