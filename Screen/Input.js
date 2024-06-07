import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native"

const input = () => {
    return(
        <View>
            <Text style = {styles.inputText}>{props.inputName}</Text>
            <TextInput
            onChangeText={t => onChangeText (t)}
            style = {styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        fontSize: 16,
        paddingLeft: 5,
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'gray',
        padding: 5,
        height: 50,
        width: 150,
    }
})