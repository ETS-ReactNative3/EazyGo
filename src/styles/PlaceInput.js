import {StyleSheet} from 'react-native';
import colors from '../assets/theme.colors';

const styles = StyleSheet.create({
  placeInput: {
    width: '90%',
    marginHorizontal: '5%',
    height: 47,
    marginTop: 10,
    backgroundColor: colors.WHITE,
  },
  container: {
    flex: 1,
    maxHeight: 200,
    width: '90%',
    marginHorizontal: '5%',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
    color: 'black',
    borderBottomWidth: 0.3,
  },
  scrollCont: {
    maxHeight: 20,
  },
});

export default styles;
