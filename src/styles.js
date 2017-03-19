import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    color: '#000066'
  },
  welcomePress: {
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  button: {
    flex: 1,
    borderColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonPress: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000066',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});