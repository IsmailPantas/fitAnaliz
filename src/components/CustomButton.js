import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Ekran genişliğini al

const CustomButton = ({ imageSource, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        width: width * 0.6, // Ekranın %60'ı kadar genişlik
        height: width * 0.4, // Ekranın %40'ı kadar yükseklik
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: width * 0.05, // Köşeleri yuvarlak yap
        padding: 10,
    },
    image: {
        width: '50%', // Buton genişliğinin %50’si kadar
        height: '50%', // Buton yüksekliğinin %50’si kadar
        resizeMode: 'contain',
    },
    text: {
        marginTop: 10,
        fontSize: width * 0.045, // Responsive font boyutu
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CustomButton;
