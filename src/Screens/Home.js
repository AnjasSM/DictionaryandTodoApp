import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import toDo from '../Assets/Dummy/dummyNote'
import Fabs from '../Components/Fabs';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: toDo,
            search: '',
            addTodo: ''
        }
    }

    _addTodo = (param) => {
        let data = {
            id: this.state.data.length + 1,
            todo: param,
            category: ''
        }
        this.setState.data.push(data)
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.header} >
                    <View ></View>
                    <View>
                        <Text style={styles.headerText}>To Do App</Text>
                    </View>
                    <TouchableOpacity style={{marginLeft: 50}}>
                        <Icon name= 'sort' type='material-community' color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBar}>
                    <TextInput 
                        onChangeText={(search) => {
                                this.setState({search})
                            }
                        }
                        style={{ marginLeft: 10, marginRight: 25 }} 
                        placeholder="Search..."/>
                </View>
                <ScrollView style={styles.scrollContainer}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                    <TouchableOpacity style={styles.card}>
                        <View style={{alignItems: 'center', marginTop: 5}}>
                            <Text style={{alignItems: 'center', borderBottomWidth:2, borderBottomColor: '#CAD0D7'}}>{item.category}</Text>
                            <Text style={{alignItems: 'center', marginTop: 10}}>{item.todo}</Text>
                        </View>
                    </TouchableOpacity>
                }/>
                </ScrollView>
                <Fabs />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "#E86B81",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderBottomColor: "#ddd",
        height: '10%',
        flexDirection: 'row'
    },
    headerText: {
        color: "white",
        fontSize: 24,
        padding: 26,
        justifyContent: 'center',
        marginLeft: 50
    },
    scrollContainer: {
        marginTop: 70
    },
    footer: {
        flexDirection: "row",
        margin: 20
    },
    searchBar: {
        zIndex: 1,
        backgroundColor: '#fff',
        paddingLeft: 15,
        borderBottomColor: 'transparent',
        elevation: 5,
        marginTop: 85,
        alignSelf: 'center',
        height: 45,
        width: 307,
        position: 'absolute',
        borderRadius: 20
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        margin: 20,
        width: '89%',
        borderWidth: 2,
        borderColor: '#E86A4E',
        height: 80,
        borderRadius: 30
    },
    inputTodo: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        borderColor: '#E75463',
        marginRight: 20
    }
  });

export default Home;