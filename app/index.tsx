import React from 'react'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import ThemedView from '@/presentation/shared/ThemedView'
import ItemMenu from '@/presentation/menu/ItemMenu'
import { View } from 'react-native'

const index = () => {
    return (
        <ThemedView margin>
            {
                animationMenuRoutes.map( (route, index)=> (
                    <ItemMenu
                    key={route.name}
                    title={route.title}
                    icon= {route.icon}
                    name= {route.name}
                    isFirst= {index === 0}
                    isLast= {index === animationMenuRoutes.length - 1}
                    />
                ))
            }

            <View className='mt-5'/>

            {
                uiMenuRoutes.map( (route, index)=> (
                    <ItemMenu
                    key={route.name}
                    title={route.title}
                    icon= {route.icon}
                    name= {route.name}
                    isFirst= {index === 0}
                    isLast= {index === animationMenuRoutes.length - 1}
                    />
                ))
            }

            <View className='mt-5'/>

            {
                menuRoutes.map( (route, index)=> (
                    <ItemMenu
                    key={route.name}
                    title={route.title}
                    icon= {route.icon}
                    name= {route.name}
                    isFirst= {index === 0}
                    isLast= {index === animationMenuRoutes.length - 1}
                    />
                ))
            }

        </ThemedView>
    )
}

export default index