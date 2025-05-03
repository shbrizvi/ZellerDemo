import { StyleSheet } from "react-native";
import { colors } from "../../common/ColorFile";
import { fontPixel, heightPixel, pixelSizeVertical } from "../../common/Dimensions";

const styles = StyleSheet.create({
  container:{
   flex:1,
   padding:pixelSizeVertical(20),
   backgroundColor:colors.background,
  },
  title: { 
    fontSize: fontPixel(22), 
    fontWeight: 'bold', 
    marginTop: heightPixel(20), 
    marginBottom: heightPixel(15)
  },

  searchInput: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: fontPixel(8),
    padding: pixelSizeVertical(10),
    marginBottom:pixelSizeVertical(12),
  },
  flatListStyle: { 
    marginTop:pixelSizeVertical(16) 
  },

});

export default styles;