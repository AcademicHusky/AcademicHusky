import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Touchable } from 'react-native';
import Task from '../components/Task';
import { useHeaderHeight } from '@react-navigation/elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ToDoList() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };  

  /* creates height variable since we are using react-navigation */
  const height = useHeaderHeight()

  return (
    <View style={styles.container}>
      {/* Scroll view */}
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <SwipeListView 
          data={taskItems}
          renderItem = {({ item, index }) => (
            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          )}
          renderHiddenItem={({ item, index }) => (
            <View>
              <TouchableOpacity style={[styles.backRightBtn, styles.trashButton]} onPress={() => handleDeleteTask(index)}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.backRightBtn, styles.editButton]} onPress={() => console.log('Edit pressed')}>
                <MaterialCommunityIcons name="pencil" size={35} color="#FFF" />
              </TouchableOpacity>
            </View>
      )}
      rightOpenValue={-150} // defines the swipeable area width
      disableRightSwipe={true} // disable swiping from the right side
      keyExtractor={(item, index) => index.toString()}
      />
      </View>
      
      </ScrollView>

      {/* Write a task */}
      {/* Uses keyboard avoiding view to ensures the keyboard does not cover the items on screen */}

      <KeyboardAvoidingView 
        /*set vertical offset to counterract react-nav issues with keyboard  */
        keyboardVerticalOffset={height + 10}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  editButton: {
    backgroundColor: 'blue',
    right: 75,
    marginRight: 'auto',

  },
  trashButton: {
    backgroundColor: 'red',
    right: 4,
    width: 75,
    marginRight: 0,
    marginLeft: 'auto',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,

  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    height: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    
  }
});