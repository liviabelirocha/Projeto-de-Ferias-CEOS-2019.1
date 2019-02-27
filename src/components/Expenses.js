import React from 'react';
import {	
  StyleSheet, 
  Text, 
  View, 
  TextInput,  
  TouchableOpacity, 
  TouchableHighlight,
  Picker,
  Modal
} from 'react-native';
import {colors, commonStyles, dimensions} from '../theme';

class Expenses extends React.Component {

  state = {
    value: '',
    description: '',
    option: '',
  }

  render() {
    return(
      <Modal>
      <View style={styles.background}>
        <View style={styles.modal}>
          <Text style={commonStyles.text}>Adicionar gasto: </Text>
          <TextInput style={commonStyles.input}
            placeholder='$1000,00'
            keyboardType = 'numeric'
            onChangeText = {(value) => this.setState({value})} 
          />
          <TextInput style={{...commonStyles.input, height: 112}}
            placeholder = 'descrição'
            multiline={true}
            onChangeText = {(description) => this.setState({description})} 
          />

          <Picker
            selectedValue={this.state.option}
            style={{height: 50, width: 100, backgroundColor: colors.primaryLight, color:'#fff', marginBottom: 10}}
            mode='dropdown'
            itemStyle={commonStyles.text}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({option: itemValue})}
          >
            <Picker.Item label="Casa" value="casa"/>
            <Picker.Item label="Lazer" value="lazer"/>
            <Picker.Item label="Compras" value="compras"/>
            <Picker.Item label="Outro" value="outro"/>
          </Picker>

          <View style={styles.buttonViews}>
            <TouchableOpacity style={styles.button} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
              <Text style={commonStyles.text}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>  
              <Text style={commonStyles.text}>Adicionar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal: {
    height: dimensions.height/2,
    width: dimensions.width - 32,
    padding: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 120,
    height: 48,
    backgroundColor: colors.primaryLight,
		paddingLeft: 12,
		paddingRight: 12,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20
  },

  buttonViews: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center'
  }
})

export default Expenses;