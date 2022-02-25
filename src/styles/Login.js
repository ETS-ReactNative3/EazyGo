import {StyleSheet, Dimensions} from 'react-native';
import themeColors from '../assets/theme.colors';
import colors from '../assets/theme.colors';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    minHeight: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    marginTop: 20,
    marginHorizontal: '2%',
    width: '96%',
    backgroundColor: colors.WHITE,
  },
  login_btn: {
    marginTop: 20,
    width: '50%',
    marginHorizontal: '25%',
  },
  forgotpswd: {
    color: 'red',
    fontSize: parseInt(width / 23),
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Montserrat',
  },
  card: {
    margin: '3%',
    marginTop: '7%',
  },
  card_cont: {
    backgroundColor: 'whitesmoke',
  },
  signup: {
    color: colors.PRIMARY,
    fontSize: parseInt(width / 23),
    textAlign: 'center',
    marginTop: 15,
  },
  cont: {
    minHeight: '100%',
    backgroundColor: 'whitesmoke',
  },
  head: {
    backgroundColor: themeColors.WHITE,
  },
  header: {
    fontSize: parseInt(width / 12),
    marginTop: 5,
    color: colors.WHITE,
    fontFamily: 'Euphemia UCAS',
    fontWeight: 'bold',
  },
  signin: {
    color: colors.PRIMARY,
    fontSize: width / 15,
    fontWeight: 'bold',
  },
  signincont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
