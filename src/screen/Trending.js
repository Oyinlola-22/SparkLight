import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Trending = () => {
    return(
        <View style={styles.container}>
            <Text>Trending</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#055160",
    }
})

export default Trending