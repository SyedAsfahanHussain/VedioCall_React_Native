import {StyleSheet} from 'react-native';
import { Color } from './Color';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: '40%',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 3,
    borderColor: Color.primary,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  primarybutton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 20,
    height: 50,
    width: '80%',
  },
  btntext: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
  },
  logout: {
    color: Color.logout,
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'normal',
  },
});
