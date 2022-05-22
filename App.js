import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

import Carousel from "react-native-snap-carousel";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      name: "Pierre du Parc de Locmania",
      formation: "Université Paris Dauphine",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Estelle Benitez",
      formation: "Sorbonne Université",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "John Frey",
      formation: "Institut Universitaire Saint-Pie X",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Ellie-Rose Marsh",
      formation:
        "Institut de Physique du Globe de Paris (IPGP) - CNRS - Université Paris Cité",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Luca Bravo",
      formation: "Université Paris Dauphine",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Filip Rosario",
      formation: "Sorbonne Université",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Mariana Leon",
      formation: "Institut Universitaire Saint-Pie X",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Taran Leblanc",
      formation: "Université Paris-Cité - Institut de Psychologie",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Rubi Hirst",
      formation:
        "Institut de Physique du Globe de Paris (IPGP) - CNRS - Université Paris Cité",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
    },
    {
      name: "Alexia Bernal",
      formation: "Université Paris Dauphine",
      description:
        "Calme et patient, je sais m'adapter à l'élève, et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux",
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
            source={{ uri: "https://picsum.photos/700" }}
          />
          <Text style={{ fontSize: 22, marginLeft: 15 }}>{item.name}</Text>
        </View>
        <Text style={{ marginTop: 35, color: "#a8adad", fontWeight: "bold" }}>
          {formationText}
        </Text>
        <Text style={{ marginTop: 5, lineHeight: 20, fontWeight: "bold" }}>
          {item.formation}
        </Text>
        <Text style={{ marginTop: 30, color: "#a8adad", fontWeight: "bold" }}>
          {descriptionText}
        </Text>
        <Text style={{ marginTop: 5, lineHeight: 20, fontWeight: "bold" }}>
          {item.description}
        </Text>
        {/* <TouchableOpacity>
          <Text>Hello</Text>
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
