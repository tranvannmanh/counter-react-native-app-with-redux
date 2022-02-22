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
        <Text style={styles.Counter}>{counter}</Text> 
        <TextInput style={styles.InputField}
          onChangeText={e=>setNumberAction(e)}
        />
        <View style={styles.ButtonOpacity}>
          <TouchableOpacity
            style={styles.Button}
            onPress={()=>dispatch(increment(Number(numberAction)))}
          >
            <Text style={{color: '#FF0000'}}>Incre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={()=>dispatch(decrement(Number(numberAction)))}
          >
            <Text style={{color: '#FF0000'}}>Decre</Text>
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

  ButtonOpacity: {
    display: 'flex',
    width: '50%',
    flexDirection: 'row',
  },

  Counter: {
    fontSize: 100,
  },

  InputField: {
    fontSize: 20,
    backgroundColor: '#B1B1B1',
    width: '50%',
    textAlign: 'center',
    borderRadius: 10,
    marginVertical: 10,
    // height: 30,
  },

  Button: {
    backgroundColor: '#3FC63A',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 50,

  }

});

export default App;
