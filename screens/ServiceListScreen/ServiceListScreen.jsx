import { View, Dimensions, ScrollView, Alert } from "react-native";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setServiceList } from "../../store/serviceSlice";
import { ServiceCard } from "../../components/ServiceCard";
import { axiosInstance } from "../../axios";
import { StyleSheet } from "react-native";

export const ServiceListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { serviceList } = useSelector((store) => store.service);

  useEffect(() => {
    async function getAllServices() {
      await axiosInstance
        .get("/services/")
        .then((response) => dispatch(setServiceList(response?.data)));
    }
    if (!serviceList?.length) getAllServices();
  }, [dispatch, serviceList]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {serviceList?.map((service) => (
          <ServiceCard key={service.id} navigation={navigation} {...service} />
        )) ?? <Text>ждем</Text>}
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
});
