import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setstate] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        {/* <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setstate({...state, isActive: value})}
          value={state.isActive}
        /> */}

        <ThemedSwitch
        text='Activo'
        value={state.isActive}
        onValueChange={(value) => setstate({...state, isActive: value})}
        />

        <ThemedSwitch
        text='Hambriento'
        value={state.isHungry}
        onValueChange={(value) => setstate({...state, isHungry: value})}
        />

        <ThemedSwitch
        text='Contento'
        value={state.isHappy}
        onValueChange={(value) => setstate({...state, isHappy: value})}
        />

      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
