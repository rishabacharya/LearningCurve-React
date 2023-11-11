import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [data,setData]=useState("Rishab")
  return (
    <View style={styles.container}>
      <div style={styles.div}> Hello world</div>
      <Text style>Open up App.js to start working on your app!</Text>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
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
  div:{
    color:"brown",
  }
});
