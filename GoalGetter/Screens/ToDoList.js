import React, { useState, useEffect } from 'react';
import { FlatList, Button, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Touchable } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskID, setTasks } from '../redux/actions';
import Store from '../redux/store';

export default function ToDoList({navigation}) {

  const { tasks } = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = () => {
    AsyncStorage.getItem('Tasks')
    .then(tasks => {
      const parsedTasks = JSON.parse(tasks);
      if(parsedTasks && typeof parsedTasks === 'object') {
        dispatch(setTasks(parsedTasks));
      }
    })
    .catch(err=>console.log(err))
  }
  
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible (() => !isModalVisible);

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <SwipeListView
            data={tasks}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.item}
                    onPress={() => {
                        dispatch(setTaskID(item.ID));
                    }}>
                    <Text
                        style={[styles.title
                        ]}
                        numberOfLines= {1}
                    >
                        {item.Title}
                    </Text>
                    <Text
                        style={[styles.subtext
                        ]}
                        numberOfLines= {1}
                    >
                        {item.Desc}
                    </Text>
                </TouchableOpacity>
            )}
            renderHiddenItem={({ item}) => (
              <View style={{marginRight: 5}}>
                <TouchableOpacity style={[styles.backRightBtn, styles.trashButton]} onPress={() => handleDeleteTask(index)}>
                  <MaterialCommunityIcons name="trash-can-outline" size={35} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.editButton]} onPress={() => navigation.navigate('Task')}>
                  <MaterialCommunityIcons name="pencil" size={35} color="#FFF" />
                </TouchableOpacity>
              </View>
        )}
            rightOpenValue={-150} // defines the swipeable area width
            disableRightSwipe={true} // disable swiping from the right side
            keyExtractor={(item, index) => index.toString()}
        />
        </ScrollView>
        <TouchableOpacity
            style={styles.buttonbody}
            onPress={() => {
                dispatch(setTaskID(tasks.length + 1));
                navigation.navigate('Task');
            }}
        >
          <Text>Add Task</Text>
        </TouchableOpacity>
    </View>
)
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#abcdef',
    },
    body: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#abcdef',
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
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#669cff',
      borderSize: 1
    },
    text: {
      fontSize: 20,
      padding: 10,
      color: '#000000',
    },
    title: {
      marginLeft: 10,
      fontSize: 20,
      padding: 0,
      color: '#000000',
    },
    subtext: {
      marginLeft: 10,
      fontSize: 15,
      color: '#9e9e9e',
    },
    item: {
      width: 350,
      height: 50,
      marginVertical: 7,
      paddingHorizontal: 10,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      borderRadius: 10,
      elevation: 5,
      marginLeft: 0,
      marginRight: 10
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  editButton: {
    backgroundColor: 'blue',
    right: 75,
    width: 80,
    marginRight: 'auto',

  },
  trashButton: {
    backgroundColor: 'red',
    right: 0,
    height: 50,
    width: 80,
    marginLeft: 'auto',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 100,
    height: 50,
    marginVertical: 7,
    paddingHorizontal: 10,
  },
})