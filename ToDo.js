import React, {Component} from "react";
import { View, Text, TouchableOpacity, 
    StyleSheet, Dimensions, TextInput 
    } from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {

    state = {
        isEditing: false,
        isCompleted: false,
        toDoValue: ""
    }

    toggleComplete = () => {
        this.setState(prevState => {
            return{
                isCompleted: !prevState.isCompleted
                // 이전의 bool값을 반환하는 것
            };
        });
    }   

    startEditing = () => {
        const {text} = this.props;
        
        this.setState({
            isEditing: true,
            toDoValue: text
        })
    }

    finishEditing = () => {
        this.setState({
            isEditing: false
        })
    }

    controlInput = (text) => {
        this.setState({
            toDoValue: text
        })
        
    }

     render() {

        const {isCompleted, isEditing} = this.state;
        const {text} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this.toggleComplete}>
                        <View style= {[styles.circle, 
                        isCompleted ? styles.completedCircle : styles.uncompletedCircle]}
                        />
                        {/* 배열로도 넣을 수가 있네 */}
                    </TouchableOpacity>
                    { isEditing ? (
                    <TextInput style={[styles.input, styles.text, isCompleted ? 
                        styles.completedText : styles.uncompletedText]}
                    value={this.state.toDoValue} multiline={true}
                    onChangeText={this.controlInput}/>
                    ) : (
                    <Text style={[styles.text, isCompleted ? 
                    styles.completedText : styles.uncompletedText]}>
                    {text}
                    </Text>) }
                </View>
                    {isEditing ? ( 
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this.finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}> 확인 </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this.startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}> 수정 </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}> X </Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row", //중앙에 있던 걸 왼쪽으로 몸
        alignItems: "center",
        justifyContent: "space-between"
    },
    text:{
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight:20
    },
    completedCircle : {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#f23657"
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        borderColor: "#353535"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10,   
    },
    input: {
        marginVertical: 15,
        width: width / 2
    }



});