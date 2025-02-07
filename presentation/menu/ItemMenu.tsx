import {  Pressable } from 'react-native'
import React from 'react'
import { Href, router } from 'expo-router'
import ThemeText from '../shared/ThemeText'
import{ View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
    title: string,
    icon: keyof typeof Ionicons.glyphMap,
    name: string,
    className?: string,

    isFirst?: boolean,
    isLast?: boolean,
}

const ItemMenu = ({ title, icon, name, isFirst, isLast = false, className }: Props) => {

    const [routeName] = name.split('/')
    const primaryColor = useThemeColor({}, 'primary')
    return (
        <Pressable
        className={`bg-white dark:bg-black/15 px-5 py-2 ${className || ''}`}
        onPress={() => router.push( routeName as Href)}
        style={{
            ...(isFirst ? { borderTopLeftRadius: 10, borderTopRightRadius: 10 } : {}),
            ...(isLast ? { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 } : {}),
        }}
        >
            <View className='flex-row items-center'>
                <Ionicons name={icon} size={30} color={primaryColor} className='mr-2'></Ionicons>
                <ThemeText type='h2'>
                    {title}
                </ThemeText>
            </View>
        </Pressable>
    )
}

export default ItemMenu