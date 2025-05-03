import {StyleSheet} from 'react-native';
import { fontPixel, widthPixel } from '../../common/Dimensions';
import { colors } from '../../common/ColorFile';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: colors.lightBlue,
    width: widthPixel(80),
    height: widthPixel(80),
    borderRadius: widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarText: {
    fontSize: fontPixel(36),
    color: colors.blue,
    fontWeight: 'bold',
  },
  infoCard: {
    width: '90%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  label: {
    color: colors.gray,
    fontSize: fontPixel(14),
    marginTop: 10,
  },
  value: {
    fontSize: fontPixel(18),
    fontWeight: '600',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  retryText: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
});
