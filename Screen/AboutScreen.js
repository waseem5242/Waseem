import {Text, View, StyleSheet, Button, TextInput} from 'react-native';


export default function AboutScreen (props) {
    return(

        <View style = {styles.container}>
            <Text style = {styles.text}>Sign in</Text>
            <Text style = {styles.text2}>Please Sign in with your account</Text>

            <Text style = {styles.eml}>Email Here</Text>
             <TextInput style={styles.input} />

             <Text style = {styles.psd}>Password</Text>
             <TextInput style={styles.input2} />

             <Text style ={styles.forget} onPress = {() => props.navigation.navigate('Reset')}> Forget Password?</Text>

             
            <Button  title = 'SIGN IN' onPress = {() => props.navigation.navigate('Dash1')} color = 'black'/>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black', marginTop:15}} />
            <View>
            <Text style={{width: 110, textAlign: 'center', marginTop:15}}>or Sign Up with</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black', marginTop:15}} />
          </View>

            <View style = {styles.view2}>
            <Button style = {styles.button2}  title = 'or Sign in with Facebook'/></View>
            
            <View style = {styles.view3}>
            <Button style = {styles.button3}  title = 'or Sign in Google'/></View>

            <Text>Didn't have account?</Text>
            <Text style = {{fontWeight: 'bold'}} onPress = {() => props.navigation.navigate('SignUp')}>Sign up Here</Text>

            
             
             
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 90,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 15,
        marginBottom: 50,
       
    },
    eml: {
       
        alignSelf: 'flex-start',
        marginLeft: 35,
    },
    psd: {
        alignSelf: 'flex-start',
        marginLeft: 35,
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d9d9d9',
        backgroundColor: 'white',
    },
    input2: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#d9d9d9',
        backgroundColor: 'white',
    },
    forget: {
        fontSize: 10,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 32,
        color: '#a9a9a9',
    },

    button2: {
        backgroundColor: 'black',
        height: 100,
        width: 100,
        marginTop: 10,
        marginBottom: 10,
    },
    button3: {
        marginTop: 10,
    },
    view2: {
        width: 250,
        height: 50,
        color: '#FF0000',
        borderRadius: 20,
        marginBottom:40,
        marginTop: 20,
    },
    view3: {
        width: 250,
        height: 50,
        color: '#FF0000',
        borderRadius: 20,
    }
});
