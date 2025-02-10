import { View, Text, Switch, Pressable, Platform } from 'react-native'
import React from 'react'
import ThemeText from './ThemeText'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
    text?: string,
    value: boolean,

    onValueChange?: (value: boolean) => void,
    className?: string
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary')

    return (
        <Pressable 
        className={`flex flex-row justify-between items-center active:opacity-80 ${className}`}
        onPress={() => onValueChange && onValueChange(!value)}
        >
            {
                text ? <ThemeText type='h2'>{text}</ThemeText> : <View/>
            }
            <Switch
            value={value}
            onValueChange={onValueChange}
            thumbColor={ isAndroid ? switchActiveColor : undefined }
            trackColor={{
                false: 'grey',
                true: switchActiveColor
            }}
            />
        </Pressable>
    )
}

export default ThemedSwitch