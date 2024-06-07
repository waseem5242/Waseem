import {Text, View, StyleSheet, Button} from 'react-native';

export default function HomeScreen (props) {
    return(

        <View style = {styles.container}>
            <Text style = {styles.text}>Home Screen</Text>
            <Button title = 'Go to About' onPress = {() => props.navigation.navigate('About')} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
})