import { View, Dimensions, ScrollView, Text, Pressable } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setServiceList } from "../../store/serviceSlice";
import { ServiceCard } from "../../components/ServiceCard";
import { axiosInstance } from "../../axios";
import { StyleSheet } from "react-native";
import { setUser } from "../../store/userSlice";

export const ServiceListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { serviceList } = useSelector((store) => store.service);
  const { user } = useSelector((store) => store.user);
  console.log(user);
  useEffect(() => {
    async function getAllServices() {
      await axiosInstance
        .get("/services/")
        .then((response) => dispatch(setServiceList(response?.data)));
    }
    getAllServices();
  }, [dispatch]);

  useEffect(() => {
    async function getUser() {
      await axiosInstance
        .post("/login/", {
          username: "marryp0ppins",
          password: "NikitaNastya1911",
        })
        .then((response) => dispatch(setUser(response?.data)));
    }
    getUser();
  }, [dispatch]);

  const handlePress = useCallback(() => {
    navigation.navigate("Basket");
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.basket}>
        <Pressable title="" onPress={handlePress} style={styles.button} />
        <Text style={styles.title}>Корзина</Text>
      </View>
      <View style={styles.container}>
        {serviceList?.map((service) => (
          <ServiceCard key={service.id} navigation={navigation} {...service} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
    minHeight: Dimensions.get("window").height,
  },
  basket: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
  },
  button: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
});
