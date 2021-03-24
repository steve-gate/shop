import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, SafeAreaView,
    FlatList, Image, Modal, TextInput, Button, ScrollView
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../redux/cartSlice"




export default function plSP({ navigation }) {

    const [anHien, setanHien] = useState(false)
    const [anHien0, setanHien0] = useState(false)
    const [anHien1, setanHien1] = useState(false)
    const [count, setCount] = useState(-12)

    const [sp, setSp] = useState([])
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();




    const filteredProducts = useSelector(state => state.products.products.filter(
        products => {
            return products.category == title
        }
    ))

    //  console.log(filteredProducts)
    //console.log(sp)

    const cartItems = useSelector(state => state.cartItems.cartItems)
    console.log(cartItems.length)





    //Them sp vao gio hang
    const addToCart2 = (itemData) => {
        dispatch({
            type: "AddToCart",
            item: itemData
        });
    }

    const addCartHandler = (book) => {

        let qty = 1;
        book.quantity = qty;

        addToCart2(book);

    }


    //Xoa SP khoi gio hang
    const deleteFromCart = (itemData) => {
        dispatch({
            type: "DeleteFromCart",
            item: itemData
        });
    }

    //tang,giam quantity vao sp
    const incrementQuantity = (itemData) => {
        dispatch({
            type: "IncrementQuantity",
            item: itemData
        })

    }

    const decrementQuantity = (itemData) => {
        dispatch({
            type: "DecrementQuantity",
            item: itemData
        })

    }




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

    //Chọn danh sách sản phẩm theo loại hàng
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

    //hiển  thị các sản phẩm theo category
    const spCategory = ({ item }) => {
        const sp = {
            id: item.id,
            image: item.image,
            title: item.title,
            category: item.category,
            Description: item.Description,
            Price: item.Price,
        }
        return (
            <TouchableOpacity onPress={() => {
                setSp(sp), setanHien0(true)
            }

            }>
                <View style={{
                    flexDirection: 'row',
                    //backgroundColor: 'gray',
                    height: 200,
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'gray'
                }}>
                    <Image
                        style={{
                            width: "30%",
                            height: "95%", resizeMode: "contain",
                            borderRadius: 5,
                            //backgroundColor: "black"
                        }}
                        source={{
                            uri: item.image
                        }}
                    />
                    <View style={{
                        paddingLeft: 25,
                        //backgroundColor: 'orange',
                        justifyContent: "space-around"
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                        <Text style={{ color: "gray", fontSize: 17 }}>Category: {item.category}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price: {item.Price}</Text>

                        <View style={{
                            height: 35,
                            width: 120, borderWidth: 1,
                            borderColor: 'red',
                        }}>

                            <TouchableOpacity onPress={() =>
                                addCartHandler(sp)
                            }>
                                <Text style={{
                                    fontSize: 20, fontWeight: 'bold',
                                    color: "red",
                                    alignSelf: 'center',
                                }}>Add to Cart</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    //danh sach SP trong gio hang
    //danh sach SP trong gio hang
    const spCart = ({ item }) => {
        return (

            <View style={{
                flexDirection: 'row',
                paddingVertical: 12,
                backgroundColor: "white",
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
            }}>
                <Image style={{
                    width: 100, height: 160
                }} source={{ uri: item.image }} />

                <View style={{
                    justifyContent: 'space-around',
                    paddingLeft: 13
                }}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        width: 200,
                        //     backgroundColor: 'orange'
                        //     textAlign: 'center',
                    }}
                        numberOfLines={2}
                        resizeMode="tail"

                    >{item.title}</Text>
                    <Text style={{
                        color: '#E4606E',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>Price: {item.Price}</Text>

                    <View style={{
                        flexDirection: 'row',
                    }}>

                        <TouchableOpacity onPress={() => {
                            item.quantity == 1
                                ? deleteFromCart(item)
                                : decrementQuantity(item)
                        }
                        }>
                            <AntDesign name="minussquareo" size={24} color="gray" />
                        </TouchableOpacity>



                        <Text style={{
                            paddingHorizontal: 10,
                            fontWeight: 'bold',
                            fontSize: 17,
                            color: 'red'
                        }}>{item.quantity}</Text>

                        <TouchableOpacity onPress={() => incrementQuantity(item)}>
                            <AntDesign name="plussquareo" size={24} color="gray" />
                        </TouchableOpacity>


                    </View>

                </View>

                <View style={{}}>
                    <TouchableOpacity style={{
                        //     width: '50%',
                        alignItems: 'flex-end',
                        //  backgroundColor: 'gray'
                    }} onPress={() => deleteFromCart(item)}>
                        <AntDesign
                            style={{
                            }}
                            name="close" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    return (
        <View style={{
            flex: 1,
            //          backgroundColor: "gray",
        }} >

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


                    <View>
                        <FlatList data={filteredProducts} renderItem={spCategory} />
                    </View>
                </View>
            )
            }

            {
                anHien && anHien0 && (
                    <ScrollView>
                        <View style={{
                            flex: 1,
                            //    backgroundColor: "gray",
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                                <TouchableOpacity onPress={() => setanHien0(false)}>
                                    <AntDesign name="left" size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setanHien(false)}>
                                    <AntDesign name="shoppingcart" size={24} color="black" />
                                </TouchableOpacity>
                            </View>

                            <Image
                                style={{
                                    width: 200,
                                    height: 280,
                                    resizeMode: "stretch",
                                    borderRadius: 5,
                                    backgroundColor: "black",
                                    alignSelf: 'center',
                                }}
                                source={{
                                    uri: sp.image
                                }}
                            />

                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                paddingVertical: 10
                                //     backgroundColor: 'gray',
                            }}>
                                <View style={styles.box}>
                                    <Text style={{ fontSize: 17, alignSelf: 'center', }}>Product: </Text>
                                    <Text style={{ fontSize: 17, alignSelf: 'center', }}>{sp.title}</Text>
                                </View>

                                <View style={styles.box}>
                                    <Text style={{ fontSize: 17, alignSelf: 'center', }}>Category: </Text>
                                    <Text style={{ fontSize: 17, alignSelf: 'center', }}>{sp.category}</Text>
                                </View>

                                <View style={styles.box}>
                                    <Text style={{ fontSize: 17, alignSelf: 'center', }}>Price: </Text>
                                    <Text style={{ fontSize: 17, alignSelf: 'center', }}>{sp.Price}</Text>
                                </View>

                                <View style={{
                                    height: 170,
                                    width: '90%',
                                    borderWidth: 0.5,
                                    borderColor: 'gray',
                                    marginVertical: 10,
                                    padding: 10
                                }}>
                                    <Text style={{ fontSize: 17, }}>Description:</Text>
                                    <Text style={{ fontSize: 17, }}>{sp.Description}</Text>
                                </View>


                            </View>

                            <View style={{
                                height: 45,
                                width: '80%',
                                borderWidth: 1,
                                borderColor: 'red',
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>

                                <TouchableOpacity onPress={() => {
                                    addCartHandler(sp);
                                    setanHien(false);
                                }
                                }>
                                    <Text style={{
                                        fontSize: 20, fontWeight: 'bold',
                                        color: "red",
                                        alignSelf: 'center',

                                    }}>Add to Cart</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                )
            }

            {
                !anHien && anHien0 && (
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            //     paddingHorizontal: 5,
                            height: 55,
                            backgroundColor: "white",
                            marginTop: 30,
                            paddingHorizontal: 15,
                            borderBottomWidth: 0.2,
                            borderBottomColor: 'gray',
                            marginBottom: 5
                        }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    backgroundColor: "#919191",
                                    borderRadius: 20,
                                    height: 30,
                                    width: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => setanHien(true)}>
                                <AntDesign name="left" size={24} color="white" />
                            </TouchableOpacity>


                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                alignSelf: 'center',
                                paddingLeft: '30%',
                                //    backgroundColor: "#919191",
                            }}>Giỏ hàng</Text>
                        </View>
                        <FlatList data={cartItems} renderItem={spCart} />

                        <View style={{
                            backgroundColor: 'white',
                            height: 80,
                            justifyContent: 'center',
                            borderTopColor: 'gray',
                            borderTopWidth: 0.5
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: '10%',
                                marginTop: 5
                            }}>
                                <Text style={{
                                    color: 'gray',
                                    fontWeight: 'bold',
                                    fontSize: 17
                                }}>Thành tiền</Text>

                            </View>

                            <View style={{
                                alignItems: 'center',
                                marginTop: 10

                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#FF414E',
                                    width: '80%',
                                    height: 45,
                                    //     alignSelf: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        alignSelf: 'center',
                                        fontSize: 18
                                    }}>
                                        Tiến Hành Đặt Hàng
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }

        </View >



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
    box: {
        height: 50,
        width: '90%',
        borderWidth: 0.5,
        borderColor: 'gray',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 12
        //  backgroundColor: 'orange'
    }
})