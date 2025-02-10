import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const UseAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ( {duration = 300, toValue = 1, useNativeDriver = true, easing = Easing.linear, callback = () => {} }) => {
    Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing
        }).start(  callback );
    }
    
    const fadeOut = ( {duration = 300, toValue = 0, useNativeDriver = true, easing = Easing.ease, callback = () => {} } ) => {
    Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing
    }).start( callback );
    
    // Animated.timing(animatedTop, {
    //   toValue: -100,
    //   duration: 700, 
    //   useNativeDriver: true
    // }).start();
    }


    const startMovingTopPosition = ( {duration = 300, toValue = 0, useNativeDriver = true, easing = Easing.ease, callback = () => {}, initialPosition = -100  } ) => {

        animatedTop.setValue( initialPosition );
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            //Para que rebote
            easing: easing
        }).start( callback );
    }
    

    return {
        animatedTop,
        animatedOpacity,

        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}
