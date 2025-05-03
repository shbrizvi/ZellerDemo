import { StyleSheet } from "react-native";
import { colors } from "../common/ColorFile";
import { fontPixel, heightPixel, pixelSizeVertical } from "../common/Dimensions";

const styles = StyleSheet.create({
  container:{
   flex:1,
   padding:pixelSizeVertical(20),
   backgroundColor:colors.background,
  },
  title: { 
    fontSize: fontPixel(18), 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  
  checkAllButton: {
    backgroundColor: colors.blue,
    marginBottom: heightPixel(10),
    paddingVertical: heightPixel(8),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: colors.background,
    fontSize: fontPixel(16),
    fontWeight: 'bold',
  },
  subtitle: { 
    fontSize: fontPixel(22), 
    fontWeight: 'bold', 
    marginTop: heightPixel(20), 
    marginBottom: heightPixel(15)
  },
  
  text: { 
    color: '#333' 
  },
  activeText: { 
    color: '#2563eb', 
    fontWeight: 'bold' 
  },
  flatListStyle: { 
    marginTop:pixelSizeVertical(16) 
  },
  searchInput: {
  borderColor: colors.border,
  borderWidth: 1,
  borderRadius: fontPixel(8),
  padding: pixelSizeVertical(10),
  marginBottom:pixelSizeVertical(12),
},

});

export default styles;