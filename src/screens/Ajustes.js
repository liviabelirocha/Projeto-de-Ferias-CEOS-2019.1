import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  CheckBox,
  ActivityIndicator
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/Feather';
import * as firebase from 'firebase';
import { commonStyles, colors } from '../theme';

class Ajustes extends React.Component {

  user = this.props.user;

  state = {
    uploading: false,
    salario: this.user.salario.toString(),
    poupanca: this.user.poupanca,
    imageURI: null,
    photoURL: this.user.photoURL
  }

  updateUserData = async() => {
    const state = {...this.state};
    if(this.user.salario.toString() === state.salario && 
    this.user.poupanca === state.poupanca && 
    state.imageURI === null) return;
    this.setState({uploading: true});
    if(state.imageURI) {
      // fetch() não está funcionando nesta versão do Expo.
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = () => {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', state.imageURI, true);
        xhr.send(null);
      });

      const storageRef = firebase.storage().ref().child(this.user.uid);
      const snapshot = await storageRef.put(blob);
      const photoURL = await snapshot.ref.getDownloadURL();
      await this.setState({photoURL: photoURL})
    }
    firebase.database().ref('users/' + this.user.uid).update({
      salario: parseInt(state.salario),
      poupanca: state.poupanca,
      photoURL: this.state.photoURL
    });
  }

  pickImage = async() => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.setState({imageURI: result.uri}); 
    }
  }

  render() {

    const uploading = 
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Salvando dados...</Text>
      <ActivityIndicator color={colors.accent}/>
    </View>

    const view = 
    <View style={commonStyles.container}>

        <TouchableOpacity
          style={{marginBottom: 32}}
          onPress={this.pickImage}>
          <Image 
            style={styles.picture} 
            source={{uri: this.state.imageURI || this.user.photoURL}}
          />
          <View style={styles.overlay}>
            <Icon 
              name='upload' 
              size={32} 
              color={'#fff'} 
            />
          </View>
        </TouchableOpacity>

        <View style={{marginBottom: 32}}>
          <Text style={commonStyles.text}>Salário</Text>
          <TextInput style={commonStyles.input}
            value={this.state.salario}
            keyboardType='number-pad'
            autoCapitalize='none'
            onChangeText={text => {this.setState({salario: text})}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox 
              value={this.state.poupanca} 
              onChange={() => {this.setState({poupanca: !this.state.poupanca})}}
            />
            <Text style={commonStyles.text}>Poupança de 10%</Text>
          </View>
        </View>
  
        <TouchableOpacity
          style={commonStyles.button}
          onPress={this.updateUserData}>
          <Text style={commonStyles.text}>SALVAR</Text>
        </TouchableOpacity>
      </View>

    return this.state.uploading ? uploading : view;
  }
}

const styles = StyleSheet.create({
  picture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16
  },

  overlay: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
});

export default Ajustes;
