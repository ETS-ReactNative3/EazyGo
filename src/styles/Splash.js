import {StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/theme.colors';

const {width, height} = Dimensions.get('screen');

const Splash = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    width: height * 0.22,
    height: height * 0.22,
    marginBottom: '5%',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: colors.PRIMARY,
    fontSize: 26,
    fontWeight: 'bold',
  },
});
export default Splash;
