import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { useSelector,useDispatch,Provider } from 'react-redux';
import { createStore } from 'redux';
import { increment, decrement } from './actions/number_slice';
import { allReducers } from './reducers/allReducers';

const store = createStore(
  allReducers,
)

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const [numberAction, setNumberAction] = useState('1');
  const dispatch = useDispatch();
  return (
      <View style={styles.center}>
        <Text>{counter}</Text> 
        <TextInput
          onChangeText={e=>setNumberAction(e)}
        />
        <View>
          <TouchableOpacity
            onPress={()=>dispatch(increment(Number(numberAction)))}
          >
            <Text>Incre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>dispatch(decrement(Number(numberAction)))}
          >
            <Text>Decre</Text>
          </TouchableOpacity>
        </View>
      </View> 
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
