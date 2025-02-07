import { Text, Pressable, PressableProps } from 'react-native'
import React from 'react'


interface Props extends PressableProps{
    className?: string
    textName: string,
}

const ThemeButton = ({ className, textName, ...rest }: Props) => {
    return (
        <Pressable
        className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
        {...rest}
        >
            <Text className='text-white'>{textName}</Text>
        </Pressable>
    )
}

export default ThemeButton