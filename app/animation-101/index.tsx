import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, View } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;


  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true
    }).start();
  }

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true
    }).start();
  }

  return (
    <ThemedView margin className='justify-center items-center flex-1'>

      <Animated.View
      className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
      style={{
        width: 100,
        height: 100,
        opacity: animatedOpacity
      }}
      />

      <ThemeButton
      className='my-5'
      textName='FadeIn'
      onPress={fadeIn} 
      />

      <ThemeButton
      textName='FadeOut'
      className='my-5'
      onPress={fadeOut} 
      />
    </ThemedView>
  );
};
export default Animation101Screen;
