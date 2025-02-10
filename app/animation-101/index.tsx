import { UseAnimation } from '@/hooks/UseAnimation';
import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = UseAnimation();
  return (
    <ThemedView margin className='justify-center items-center flex-1'>

      <Animated.View
      className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
      style={{
        width: 100,
        height: 100,
        opacity: animatedOpacity,
        transform: [{ translateY: animatedTop }]
      }}
      />

      <ThemeButton
      className='my-5'
      textName='FadeIn'
      onPress={() => {
        fadeIn({

        });
        startMovingTopPosition({
          easing: Easing.bounce,
          duration: 700,
        });
      }} 
      />

      <ThemeButton
      textName='FadeOut'
      className='my-5'
      onPress={() => fadeOut({})} 
      />
    </ThemedView>
  );
};
export default Animation101Screen;
