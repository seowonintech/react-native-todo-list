import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7, marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10, marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 10, marginBottom: 20,
    fontSize: 12,
    fontWeight: '300',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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