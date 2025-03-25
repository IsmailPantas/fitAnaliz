import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <TextInput style={styles.searchBar} placeholder="Ara..." />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        paddingVertical: height * 0.02, // Header yüksekliği ekran boyutuna göre ayarlandı
        paddingHorizontal: width * 0.05, // Yatay padding eklendi
    },
    logo: {
        width: width * 0.12, // Logo ekran boyutuna göre ölçeklendi
        height: width * 0.12,
        marginRight: width * 0.03,
    },
    searchBar: {
        flex: 1,
        backgroundColor: 'white',
        padding: height * 0.015, // Padding ekran boyutuna göre dinamik
        fontSize: width * 0.045, // Yazı boyutu ekran genişliğine bağlı
        borderRadius: width * 0.03,
    },
    loginButton: {
        backgroundColor: 'white',
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.05,
        borderRadius: width * 0.02,
        marginLeft: width * 0.03,
    },
    loginText: {
        fontSize: width * 0.04,
    },
});

export default Header;
