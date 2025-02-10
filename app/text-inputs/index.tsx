import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputsScreen = () => {

  const [form, setform] = useState({
    name: '',
    email: '',
    phone: '',
  })
  return (
    <ThemedView margin>
      <TextInput
      className='text-black dark:text-white'
      placeholder='Name'
      onChangeText={(value) => setform({...form, name: value})}
      />


      <ThemedCard className='mb-5'>
        <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
