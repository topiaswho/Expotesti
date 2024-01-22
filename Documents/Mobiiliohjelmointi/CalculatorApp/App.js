import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
const [result, setResult] = useState('');
  
const calculateSum = () => {

  const sum = parseFloat(number1) + parseFloat(number2);
  setResult(`Sum: ${sum}`)
}

const calculateDifference = () => {
  const diff = parseFloat(number1) - parseFloat(number2);
  setResult(`Difference: ${diff}`)
}

return (
    <View style={styles.container}>
<TextInput
style={styles.input}
keyboardType='numeric'
placeholder='Enter number 1'
value={number1}
onChangeText={(text) => setNumber1(text)}
/>

<TextInput
style={styles.input}
keyboardType='numeric'
placeholder='Enter number 2'
value={number2}
onChangeText={(text) => setNumber2(text)}
/>

<View style={styles.button}>
<Button title='+' onPress={calculateSum}/>
<Button title='-' onPress={calculateDifference} />
</View>
<Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  button: {
    flexDirection: 'row',
  }
});
