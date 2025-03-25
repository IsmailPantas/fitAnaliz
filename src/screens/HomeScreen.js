import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

const { height } = Dimensions.get('window');

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <CustomButton
                    imageSource={require('../../assets/nutrition.png')}
                    title="Besin Değerleri Gör"
                    onPress={() => alert("Besin değerleri!")}
                />
                <CustomButton
                    imageSource={require('../../assets/mealplan.png')}
                    title="Beslenme Programı Oluştur"
                    onPress={() => alert("Beslenme programı!")}
                />
                <CustomButton
                    imageSource={require('../../assets/exercise.png')}
                    title="Egzersiz Kısmı"
                    onPress={() => alert("Egzersiz kısmı!")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDE6B6',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.05, // Dikey boşluk ekran boyutuna göre
    },
});

export default HomeScreen;
