import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor({
    dark:'yellow',
    light: 'yellow'
  }, 'background')

  const onRefresh = () => {
    setisRefreshing(true)
    setTimeout(() => {
      setisRefreshing(false)
    }, 3000)
  }

  const [isRefreshing, setisRefreshing] = useState(false)
  return (
    <ScrollView
    refreshControl={
      <RefreshControl
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      colors={[primaryColor, 'red', 'blue']}
      progressBackgroundColor={backgroundColor}
      />
    }
    >
      <ThemedView margin>
        <ThemeText>Pull to refresh</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
