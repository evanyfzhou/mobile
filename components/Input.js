import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Alert, Image, Button } from 'react-native';

const INPUT = (props) => {
    const [textInputValue, setTextInputValue] = useState('');

    useEffect(() => {
        setTextInputValue('');
    }, [props.modalVisible]);

    const handleTextChange = (text) => {
        setTextInputValue(text);
    };

    return (
        <Modal
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.onModalClose();
            }}>
            <View style={styles.container}>
                <Image source={require('../components/image.png')} style={styles.image} />
                <TextInput
                    style={styles.input}
                    value={textInputValue}
                    onChangeText={handleTextChange}
                    placeholder="Type here"
                    placeholderTextColor="gray"
                />
                <Button
                    title="Go Back"
                    onPress={() => {
                        // Call the function from props to hide the modal
                        props.onModalClose();
                    }}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: 200,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
});

export default INPUT;
