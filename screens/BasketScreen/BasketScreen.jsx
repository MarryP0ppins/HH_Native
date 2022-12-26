import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../axios";
import { setContract } from "../../store/contractSlice";
import { ContractCard } from "../../components/ContractCard/ContractCard";

export const BasketScreen = () => {
  const dispatch = useDispatch();
  const { contract } = useSelector((store) => store.contract);

  useEffect(() => {
    async function getAllContracts() {
      await axiosInstance.get("/contracts/?client_id=2").then((response) => {
        dispatch(setContract(response?.data));
      });
    }
    getAllContracts();
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {contract
          ?.filter((cnt) => cnt?.status === "EXECUTION")
          ?.map((cnt, index) => (
            <ContractCard {...cnt} key={index} />
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
});
