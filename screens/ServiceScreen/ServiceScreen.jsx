import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../axios";
import { removeService } from "../../store/serviceSlice";

export const ServiceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [count, onChangeCount] = React.useState(0);

  const { service } = useSelector((state) => state.service);
  const ratingStars = useMemo(() => {
    [...Array(service.rating < 0 ? 0 : service.rating)].map((value, index) => (
      <Image
        key={index}
        source={require("../../assets/star.png")}
        style={styles.starGrey}
      />
    ));
  }, [service]);

  const handlePress = useCallback(() => {
    async function createContract() {
      await axiosInstance
        .post("/contracts/", {
          client: 2,
          service: Number(service?.id),
          date_of_execution: new Date(),
          status: "EXECUTION",
          duration: Number(count),
        })
        .then((response) => dispatch(removeService(response?.data)));
    }
    createContract();
    navigation.navigate("ServiceList");
  }, [navigation, count, service?.id]);

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.price}>{service.price} руб./день</Text>
          <View style={styles.starContainer}>{ratingStars}</View>
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChangeCount(value)}
            value={count}
            keyboardType="number-pad"
          />
          <View style={styles.buttonView}>
            <Pressable
              title=""
              onPress={handlePress}
              style={styles.addToBasket}
            />
            <Text>Оформить</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
    minHeight: Dimensions.get("window").height,
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: 24,
    marginBottom: 20,
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 500,
    borderRadius: 16,
    marginTop: 24,
  },
  price: {
    backgroundColor: "royalblue",
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 32,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 24,
  },
  star: {
    width: 40,
    height: 40,
  },
  starGrey: {
    width: 40,
    height: 40,
    opacity: 0.6,
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    width: 100,
  },
  buttonView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
  },
  addToBasket: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
});
