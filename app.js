import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
<View style={styles.secondaryContainer}>
<Text>Testing</Text>
</View>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
secondaryContainer: {
flex: 1,
width: '100%',
alignItems: 'flex-end',
justifyContent: 'flex-end',
backgroundColor: '#fff',
},
});