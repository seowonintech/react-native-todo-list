import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// Firebase
import { firebaseDB } from '../core/firebase';
// Custom
import { RadioButton } from '../lib/taesu-react-native';
import * as ActionTypes from '../actions/ActionTypes';
// Material Design
import { Button, CheckBox, SearchBar, FormInput } from 'react-native-elements';

const styles = {
    SearchBar: {
        common: {
            flex: 1,
            justifyContent: 'center',
        },
        container: {
            flex: 0.85,
            justifyContent: 'center',
            backgroundColor: 'teal'
        },
        input: {
            flex: 1,
            justifyContent: 'center',
            textColor: 'white',
            backgroundColor: 'teal'
        }
    },
};

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
        const { todos, mainState, filter } = this.props;

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
        let newArray;
        if (filter === ActionTypes.FILTER_ACTIVE) {
            newArray = arrayTodos.filter((val) => {
                return val.complete === false;
            });
        }
        else if (filter === ActionTypes.FILTER_COMPLETE) {
            newArray = arrayTodos.filter((val) => {
                return val.complete === true;
            });
        }
        else {
            newArray = arrayTodos
        }
        
        return (
            <ScrollView 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                }}
            >
                {newArray.map((todo, index) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        key={index}
                    >
                        <CheckBox
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 0.2,
                                marginLeft: 10
                            }}
                            checked={todo.complete}
                            onPress={() => {
                                firebaseDB.ref(todo.id).update({
                                    ...todo,
                                    complete: !todo.complete
                                });
                            }}
                        />
                        <View style={{flex: 0.8}}>
                            <TextInput
                                multiline
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                    color: todo.complete ? 'grey' : 'black'
                                }}
                                value={todo.text}
                                onChangeText={text => {
                                    firebaseDB.ref(todo.id).update({
                                        ...todo,
                                        text: text
                                    });
                                }}
                            />
                            {/*<SearchBar
                                lightTheme
                                noIcon
                                containerStyle={styles.SearchBar.common}
                                inputStyle={styles.SearchBar.common}
                                onChangeText={text => {
                                    firebaseDB.ref(todo.id).update({
                                        ...todo,
                                        text: text
                                    });
                                }}
                                value={todo.text}
                            />*/}
                        </View>
                        <Button
                            title="Delete"
                            buttonStyle={{
                                flex: 1,
                                margin: 0,
                                marginRight: 0,
                            }}
                            backgroundColor={mainState.subColor}
                            color="white"
                            icon={{name: 'delete'}}
                            fontWeight="bold"
                            onPress={() => firebaseDB.ref(todo.id).remove()}
                        />
                    </View>
                ))}
            </ScrollView>
        );
    }
}

export default Todo;