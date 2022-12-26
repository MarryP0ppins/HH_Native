import { useCallback } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../axios";
import { removeContract } from "../../store/contractSlice";

export const ContractCard = ({ ...contract }) => {
  const dispatch = useDispatch();
  const handlePressSign = useCallback(() => {
    async function signContract() {
      await axiosInstance
        .patch(`/contracts/${contract?.id}/`, {
          status: "SIGN",
        })
        .then((response) => dispatch(removeContract(response?.data)));
    }
    signContract();
  }, [dispatch]);

  const handlePressDelete = useCallback(() => {
    async function signContract() {
      await axiosInstance
        .delete(`/contracts/${contract?.id}/`)
        .then((response) => dispatch(removeContract({ id: contract?.id })));
    }
    signContract();
  }, [dispatch]);

  return (
    <View style={styles.container_cnt}>
      <Text style={styles.title}>{`ID клиента - ${contract?.client}`}</Text>
      <Text
        style={styles.title}
      >{`Длительность контракта - ${contract?.duration} дней`}</Text>
      <Text style={styles.price}>{`Статус - ${contract?.status}`}</Text>
      <View style={styles.sign}>
        <Pressable text="" onPress={handlePressSign} style={styles.button} />
        <Text style={styles.text}>Подписать</Text>
      </View>
      <View style={styles.delete}>
        <Pressable text="" onPress={handlePressDelete} style={styles.button} />
        <Text style={styles.text}>Отказаться</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_cnt: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    width: "100%",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "700",
  },
  price: {
    backgroundColor: "royalblue",
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 32,
  },
  sign: {
    marginTop: 6,
    backgroundColor: "#c2aeff",
    cursor: "pointer",
    position: "relative",
  },
  delete: {
    marginTop: 6,
    backgroundColor: "#ff0000",
    cursor: "pointer",
    position: "relative",
  },
  text: {
    padding: 4,
    fontSize: 20,
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
