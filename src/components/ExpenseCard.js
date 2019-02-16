import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { colors } from '../theme';
import Icon from 'react-native-vector-icons/Feather';

class ExpenseCard extends React.Component {

  state = {
    expanded: false
  }

  render() {
    let expanded = this.state.expanded;
    return (
      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.tile}
          onPress={() => {
            this.setState({expanded: !this.state.expanded})
          }}>
          <View style={{
            backgroundColor: colors[this.props.color],
            ...styles.indicator
          }}></View>
          <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
          <Text style={{...styles.text, marginLeft: 'auto'}}>R$ {this.props.value}</Text>
            <Icon
              style={{marginLeft: 12}}
              name={'chevron-' + (expanded ? 'up':'down')}
              size={24} 
              color='#fff'
            />
        </TouchableOpacity>
        <View style={{
          height: 1,
          backgroundColor: colors[this.props.color]
        }}/>
        {expanded ?
        <View style={{padding: 12}}>
          <Text style={styles.text}>{this.props.content}</Text>
        </View>
          : 
        null}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  card: {
    width: Dimensions.get('window').width - 32,
    marginBottom: 8,
    backgroundColor: colors.primaryLight
  },

  tile: {
    backgroundColor: colors.primaryLight,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12
  },

  indicator: {
    height: 32,
    width: 6,
    marginRight: 12
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    letterSpacing: 1,
  },

  divider: {
    height: 1,
    backgroundColor: colors.accent
  }
});

export default ExpenseCard;
