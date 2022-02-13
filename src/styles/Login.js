import {StyleSheet,Dimensions} from 'react-native';
import themeColors from '../assets/theme.colors';
import colors from '../assets/theme.colors';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    minHeight: '30%',
    justifyContent:'center',
    alignItems:'center'
  },
  textField: {
    marginTop: 20,
    marginHorizontal: '5%',
    width: '90%',
    backgroundColor:colors.WHITE
  },
  login_btn: {
    marginTop: 20,
    width: '50%',
    marginHorizontal: '25%',
  },
  forgotpswd: {
    color: 'red',
    fontSize: parseInt(width/20),
    textAlign:'center',
    marginTop:15
  },
  signup:{
    color:colors.PRIMARY,
    fontSize:parseInt(width/20),
    textAlign:'center',
    marginTop:15
  },
  cont:{
    minHeight:'100%',
    backgroundColor:themeColors.WHITE
  },
  head:{
    backgroundColor:themeColors.WHITE,
  },
  header:{
    fontSize: parseInt(width/10),
    marginTop:5,
    color:colors.WHITE
  },
  signin:{
    color:colors.PRIMARY,
    fontSize:width/15
  },
  signincont:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  }
});

export default styles;
