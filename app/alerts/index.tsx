import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import {  Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AlertsScreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


    const createThreeButtonAlert = () =>
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);




  return (
    <SafeAreaProvider>
      <ThemedView margin className='flex-1 justify-around items-center'>
        <ThemeButton
        textName='2-Button Alert'
        onPress={createTwoButtonAlert}
        />

        <ThemeButton
        className='mt-2'
        textName='3-Button Alert'
        onPress={createThreeButtonAlert}
        />
      </ThemedView>
    </SafeAreaProvider>
  );
};
export default AlertsScreen;
