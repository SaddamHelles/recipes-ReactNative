import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

interface Props {
    title: string;
    color: string;
}
const CategoryGridTile = ({ title, color }: Props) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
