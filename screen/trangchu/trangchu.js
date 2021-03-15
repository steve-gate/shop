import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, SafeAreaView,
    FlatList, Image, Modal, TextInput, Button, ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';




export default function trangchu({ navigation }) {

    const [anHien, setanHien] = useState(false)
    const [anHien0, setanHien0] = useState(false)
    const [title, setTitle] = useState('');

    const categories = [
        { id: "1", title: "Books", image: "https://image.flaticon.com/icons/png/512/562/562132.png" },
        { id: "2", title: "Mobiles", image: "https://icon-library.net/images/smartphone-icon-png/smartphone-icon-png-13.jpg" },
        { id: "4", title: "Watches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHVsPJmUpbX1qe0js7-NLLHWzrJNofP0wrim8dle-Oj5k31CC&s" },
        { id: "5", title: "Shoes", image: "https://cdn3.iconfinder.com/data/icons/sport-set-1/512/Shoes_2-256.png" },
        { id: "8", title: "Laptops", image: "https://cdn0.iconfinder.com/data/icons/devices-icons-rounded/110/Laptop-512.png" },
        { id: "9", title: "T-Shirt", image: "https://cdn2.iconfinder.com/data/icons/mobile-device/512/tshirt-wear-sport-man-blue-round-512.png" },
        { id: "6", title: "Jewelry", image: "https://www.shareicon.net/data/512x512/2016/09/02/824427_jewel_512x512.png" },
        { id: "7", title: "Wallets", image: "https://cdn4.iconfinder.com/data/icons/peppyicons-rounded/512/wallet2-512.png" },
    ]

    const renderItemsFunction = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}
                onPress={
                    () => {
                        setTitle(item.title),
                            setanHien(true)
                    }
                }>
                <View>
                    <Image source={{ uri: item.image }} style={{ width: 90, height: 90 }} />
                </View>
                <Text style={styles.text} numberOfLines={2}> {item.title} </Text>

            </TouchableOpacity>

        )
    }



    return (
        <View style={{ flex: 1 }} >
            {!anHien && !anHien0 && (
                <View style={{ flex: 1 }} >
                    <FlatList style={{ marginTop: 5 }} data={categories} numColumns={2}
                        renderItem={renderItemsFunction} />
                </View>
            )
            }
            {anHien && !anHien0 && (
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                        <TouchableOpacity onPress={() => setanHien(false)}>
                            <AntDesign name="left" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign name="shoppingcart" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ color: 'red', fontSize: 47 }}>abcdefghijklmnopqrstuvwxyz</Text>
                </View>
            )}
        </View>



    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 5,
        backgroundColor: "#f5f5f0",

    },
    item: {
        flex: 1,
        height: 180,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "gray",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        margin: 5
    },
    text: {
        fontSize: 15,
        alignContent: "flex-end",
        marginTop: 10

    },
})