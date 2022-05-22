import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import Carousel from "react-native-snap-carousel";

console.disableYellowBox = true;

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
          backgroundColor: "white",
          borderRadius: 10,
          height: 450,
          padding: 25,
          marginLeft: 32,
          marginRight: 0,

          shadowColor: "#171717",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
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
          <Text style={{ fontSize: 22, marginLeft: 20, maxWidth: 130 }}>
            {item.name}
          </Text>
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
        <TouchableOpacity
          style={{
            backgroundColor: "#0361D0",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "13",
            }}
          >
            Prendre un cours avec ce Teach'r
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            marginTop: 15,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "#f06b61",
          }}
        >
          <Text
            style={{
              color: "#f06b61",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "13",
            }}
          >
            Retirer ce Teach'r de mes favoris
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
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
