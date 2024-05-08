
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditarInventario = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false);
    };

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    const showDatepicker = () => {
        setShow(true);
    };


    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.tituloText}>Editar Inventario</Text>
            </View>
            <View style={styles.containerEdit}>
                <FontAwesomeIcon name="pencil" size={60} style={styles.edit} />
            </View>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.containerForm}>
                    {['ID Inventario', 'Nombre Del Inventario', 'Observacion', 'Estado Del Inventario', 'Funcionario A Cargo'].map((label) => (
                        <View style={styles.containerInput} key={label}>
                            <Text style={styles.textInputLabel}>{label}:</Text>
                            <Input containerStyle={styles.inputContainer} inputStyle={styles.input} />
                        </View>
                    ))}
                    <View style={styles.containerInput}>
                        <Text style={styles.textInputLabel}>Fecha:</Text>
                        <TouchableOpacity onPress={showDatepicker} style={styles.inputDate}>
                            <Text style={styles.dateText}>{date.toLocaleDateString()} </Text>
                            <FontAwesomeIcon name="calendar" size={20} style={styles.calendarIcon} />
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={navigateToHome} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <View style={styles.flechaContainer}>
                <TouchableOpacity onPress={navigateToHome} style={styles.flechaLeft}>
                    <FontAwesomeIcon name="arrow-left" size={40} style={styles.flechaIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titulo: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#39A900',
    },
    tituloText: {
        fontSize: 24,
        color: 'white',
    },
    containerEdit: {
        width: '89%',
        borderBottomWidth: 1,
        alignItems: 'flex-end',
    },
    edit: {
        margin: '1%'
    },
    scrollContainer: {
        width: '100%',
        height: 400,
        marginTop: '10%',
    },
    containerForm: {
        margin: '5%',
        width: '90%',
    },
    containerInput: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    textInputLabel: {
        fontSize: 16,
        marginRight: 10,
        flex: 1,
    },
    inputDate: {
        flex: 2,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'rgb(133, 133, 133)',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 2,
    },
    input: {
        width: '100%',
    },
    button: {
        width: 160,
        height: 50,
        backgroundColor: '#39A900',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 100,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        marginHorizontal: 10,
    },
    flechaContainer: {
        position: 'absolute',
        bottom: '5%',
        right: 0,
        marginRight: 20,
    },
    flechaIcon: {
        color: 'black',
    },
});

export default EditarInventario;
