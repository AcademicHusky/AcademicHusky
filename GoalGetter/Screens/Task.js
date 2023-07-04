import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Touchable } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Store from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../redux/actions';

export default function Task({ navigation }) {

    const {tasks, taskID} = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
      getTask();
    }, [])

    const getTask = () => {
      const Task = tasks.find(task => task.ID === taskID)
      if (Task) {
        setTitle(Task.Title);
        setDesc(Task.Desc);
      }
    }

    const setTask = () => {
      if (title.length == 0) {
        Alert.alert('Warning!')
      } else {
        try {
          var Task = {
            ID: taskID,
            Title: title,
            Desc: desc
          }
          const index = tasks.findIndex(task => task.ID === taskID);
          let newTasks = [];
          if (index > -1) {
            newTasks = [...tasks];
            newTasks[index] = Task;
          } else {
            newTasks = [...tasks, Task];
          }
          AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            navigation.navigate('To Do List');
          })
          .catch(err => console.log(err))
        } catch (error) {
          console.log(error);
        }
      }
    }

    return (
        <View style={styles.body}>
            <TextInput
                value={title}
                style={styles.input}
                placeholder='Title'
                placeholderTextColor='#bababa'
                onChangeText={(value)=>setTitle(value)}
                />
            <TextInput
                value={desc}
                style={styles.input}
                placeholder='Desciption'
                placeholderTextColor='#bababa'
                multiline
                onChangeText={(value)=>setDesc(value)}
                />
              <TouchableOpacity
              style={styles.buttonbody}
              onPress={setTask}
              >
                <Text style={styles.text}>
                  Save Task
                </Text>
              </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#555555',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      textAlign: 'left',
      fontSize: 20,
      margin: 10,
      padding:10,
    },
    buttonbody: {
      backgroundColor: '#669cff',
      borderRadius: 10,
      borderSize: 1
    },
    text: {
      fontSize: 20,
      lineWeight: 'bold',
      padding: 10,
      color: '#000000',
    },
    
})