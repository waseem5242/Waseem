import {View, Button, StyleSheet} from "react-native";

const CutomButton = () => {
  return(
    <View style = {styles.view}>
    <Button title = 'GET ENROLL' color = 'black' height = '30' width = '10' />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    borderRadius: 90,
    marginTop: 20
  }
})
export default CutomButton;