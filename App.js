import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/65/1014/335/soccer-sao-paulo-fc-emblem-logo-hd-wallpaper-preview.jpg' }} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: 'https://s2-ge.glbimg.com/VKG42-3nfMa-Gi62nQkzcs2KCVQ=/0x0:800x515/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/J/m/64Xd9ZTLA9k3ojqWla3Q/escudo-spfc.jpg' }} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <Button title="Login" onPress={() => alert('Login Pressed')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '20%' ,
    height: '20%' ,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  inputContainer: {
    width: '80%',
    
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
