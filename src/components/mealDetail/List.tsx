import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
interface Props {
    data: string[];
}
const List = ({ data }: Props) => {
    return (
        <React.Fragment>
            {data?.map(item => (
                <View key={item} style={styles.listItem}>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </React.Fragment>
    );
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 22,
        marginVertical: 6,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    },
});
