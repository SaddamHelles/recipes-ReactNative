import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailScreen: React.FC<
    NativeStackScreenProps<RootStackParamList, 'MealDetail'>
> = ({ route, navigation }) => {
    const { mealId } = route.params;

    const selectMeal = MEALS.find(meal => meal.id === mealId);

    const handleHeaderButtonPress = () => {
        console.log('handleHeaderButtonPress clicked!');
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={'star'}
                        color="white"
                        onPress={handleHeaderButtonPress}
                    />
                );
            },
        });
    }, [navigation, handleHeaderButtonPress]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectMeal?.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectMeal?.title}</Text>
            <MealDetails
                affordability={String(selectMeal?.affordability)}
                complexity={String(selectMeal?.complexity)}
                duration={Number(selectMeal?.duration)}
                textStyle={styles.detailText}
            />

            <Subtitle>Ingredients</Subtitle>
            <List data={selectMeal?.ingredients || []} />
            <Subtitle>Steps</Subtitle>

            <List data={selectMeal?.steps || []} />
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
});
