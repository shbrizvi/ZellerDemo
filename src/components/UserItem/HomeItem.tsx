import {Text, TouchableOpacity, View} from 'react-native';
import {ZellerCustomer} from '../../screens/ZellerUser-types';
import styles from './styles';
import { NavigationTypes } from '../../navigation/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



const HomeItem = ({item}: {item: ZellerCustomer}) => {
  const itemNameChar = item.role.charAt(0).toUpperCase() + item.role.slice(1).toLowerCase() || 'N/A';
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationTypes>>();
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('ProfileScreen', {id: item.id})}
    style={styles.container}>
      <View
          style={styles.leftContainer}>
       <Text style={styles.shadowTxt}>{item.name.charAt(0)}</Text> 
      </View>
      <View>
        <Text style={styles.headingTxt}>{item.name}</Text>
        <Text style={styles.subTxt}>
          {itemNameChar}
        </Text>
      </View>
      </TouchableOpacity>
  );
};



export default HomeItem;
