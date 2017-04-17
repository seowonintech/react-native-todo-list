import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// Firebase
import { firebaseDB } from '../core/firebase';
// Custom
import { RadioButton } from '../lib/taesu-react-native';
// Material Design
import { Button } from 'react-native-elements';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { handleChangeDatabase } = this.props;

        let todoTest = firebaseDB.ref().on('value', (snapshot) => {
            let firebaseTodoList = snapshot.val();
            handleChangeDatabase(firebaseTodoList);
        });
    }

    render() {
        const { todos } = this.props;

        // let arrayTodos = Object.entries(todos);
        if ( todos === null ) {
            return <View />;
        }
        let arrayTodos = Object.keys(todos).map(key => {
            // return todos[key]; // {key: value, text: aaaa, complete: false}
            return {
                id: key,
                ...todos[key],
            };
        });
        return (
            <ScrollView 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'skyblue',
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {arrayTodos.map((todo, index) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: 'skyblue',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        key={index}
                    >
                        <TouchableOpacity 
                            onPress={() => {
                                    firebaseDB.ref(todo.id).update({
                                        ...todo,
                                        complete: !todo.complete
                                    });
                                }
                            }
                        >
                            <RadioButton complete={todo.complete} />
                        </TouchableOpacity>
                        <View style={{flex: 1}}>
                            <TextInput
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    height: 30,
                                    flex: 1,
                                }}
                                value={todo.text}
                                onChangeText={text => {
                                    firebaseDB.ref(todo.id).update({
                                        ...todo,
                                        text: text
                                    });
                                }}
                            />
                        </View>
                        <TouchableOpacity 
                            onPress={() => firebaseDB.ref(todo.id).remove()}
                        >
                            <Button
                                title="BUTTON" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

export default Todo;