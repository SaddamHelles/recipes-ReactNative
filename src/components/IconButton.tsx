import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
interface Props {
    onPress: () => void;
    icon: string;
    color: string;
}
const IconButton = ({ icon, color, onPress }: Partial<Props>) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons
                name={icon as keyof (typeof Ionicons)['glyphMap']}
                size={24}
                color={color}
            />
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
});
