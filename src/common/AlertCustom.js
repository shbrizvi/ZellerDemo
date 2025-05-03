import {Alert} from 'react-native';

export function CustomAlert(
  msg = '',
  yesCallback = () => {},
  positiveText = 'Continue',
  cancel = false,
) {
  Alert.alert(
    '',
    msg,
    [
      {
        text: positiveText,
        onPress: () => {
          yesCallback();
        },
      },
    ],
    {cancelable: cancel},
  );
}

export const TwoButtonAlert = (
  title = '',
  message,
  cancelPress,
  okPress,
  leftBtn = 'Cancel',
  rightBtn = 'Ok',
) =>
  Alert.alert(title, message, [
    {
      text: leftBtn,
      onPress: () => cancelPress(),
      style: 'cancel',
    },
    {text: rightBtn, onPress: () => okPress()},
  ]);

