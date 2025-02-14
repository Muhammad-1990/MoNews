import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

interface ItemProps {
    title: string;
    image: string;
}

const DATA = [
    {
        id: '1',
        title: 'Item 1',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        title: 'Item 2',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '3',
        title: 'Item 3',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '4',
        title: 'Item 4',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '5',
        title: 'Item 5',
        image: 'https://via.placeholder.com/150',
    },
]

const Item = ({ title, image }: ItemProps) => (
    <View>
        {/* <Image source={{ uri: image }} /> */}
        <Text>{title}</Text>
    </View>
);

const Featured = () => {
    return (
        <View className="bg-pink-200 p-5">
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} image={item.image} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Featured