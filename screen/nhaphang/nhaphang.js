import React, { useState, useEffect } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, SafeAreaView,
    FlatList, Image, Modal, TextInput, Button, ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'

export default function nhaphang({ navigation }) {
    const [user, setUser] = useState(null)
    const [name, setName] = useState()
    const [search, setSearch] = useState()
    const [messages, setMessages] = useState([])

    const DATA = [
        { id: 1, title: 'Bột giặt Aba', gia: 100000, uri: 'https://cdn.tgdd.vn/Products/Images/2463/88314/bhx/bot-giat-nhiet-aba-sach-tinh-tuom-400g-201912031037171175.jpg' },
        { id: 2, title: 'Bột giặt Binky', gia: 200000, uri: 'https://cdn.tgdd.vn/Products/Images/2463/147548/bhx/bot-giat-binky-ngat-huong-6kg-201910230944097698.jpg' },
        { id: 3, title: 'Bột giặt Omo', gia: 300000, uri: 'https://vn-test-11.slatic.net/p/e28d51176647f4a6742d9d7a655d7673.jpg' },
        { id: 4, title: 'Bột giặt Lix', gia: 400000, uri: 'https://media3.scdn.vn/img4/2020/06_01/fN6Sh5oBEelsa8omwqgi.jpg' },
        { id: 5, title: 'Bột giặt Surf', gia: 500000, uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/383/093/products/bgiat.png?v=1590048143317' },
    ];

    const Item = ({ title, gia, uri, onPress }) => (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                height: 200, width: 120,
                borderWidth: 0.25,
                borderColor: 'gray',
                marginLeft: 12,
                marginTop: 20,
                borderRadius: 8,

            }}>
                <Image
                    source={{ uri }}
                    style={{
                        width: 96,
                        height: 86,

                        //  borderWidth: 1,
                        //    borderColor: '#d35647',
                        borderRadius: 8,
                        resizeMode: 'stretch',
                        marginTop: 15
                        //   margin: 8,
                        //    alignSelf: 'flex-start',
                        // backgroundColor: 'orange'
                    }}
                />
                <Text style={{ color: '#C44949', paddingVertical: 15, alignSelf: 'center', fontWeight: 'bold' }}>{gia}</Text>
                <Text style={{ color: '#26313B', fontWeight: 'bold', alignSelf: 'center', }}>{title}</Text>

            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            gia={item.gia}
            uri={item.uri}
        />
    );



    return (
        <ScrollView>
            <SafeAreaView >
                <View style={{ backgroundColor: '#90CDF4', paddingBottom: 15 }}>
                    {/* Tìm Kiếm */}
                    <View style={{ flexDirection: 'row', padding: 12, }}>

                        <View style={{ backgroundColor: '#FFFFFF', height: 40, width: '85%', flexDirection: 'row', borderRadius: 8, alignSelf: 'center', alignItems: 'center', }}>
                            <AntDesign name="search1" size={24} color="#7F8891" style={{ padding: 8 }} />
                            <TextInput style={{ width: 240, height: 40 }} placeholder="Tìm kiếm" value={search} style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} />
                        </View>

                        <TouchableOpacity style={{
                            backgroundColor: '#FFFFFF', marginLeft: 8,
                            width: 45, height: 40, borderRadius: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <AntDesign name="shoppingcart" size={24} color="black" />
                        </TouchableOpacity>

                    </View>

                    {/* hình ảnh */}
                    <Image
                        style={{ height: 100, width: '93%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10 }}
                        source={require('./lienket.png')}
                    />

                    <View style={{
                        backgroundColor: "#FFFFFF",
                        borderTopStartRadius: 18, borderTopRightRadius: 18,
                        marginTop: 15,
                        paddingBottom: 50
                    }}>

                        <ScrollView horizontal={true}>
                            <View style={{ paddingLeft: 13, paddingTop: 25, flexDirection: 'row', paddingBottom: 20 }}>

                                <View style={{
                                    flexDirection: 'row',
                                    height: 60,
                                    width: 120,
                                    justifyContent: 'center', alignItems: 'center',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 8,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>
                                    <Image
                                        style={{
                                            resizeMode: 'contain', height: 40,
                                            borderRadius: 10, width: 65
                                        }}
                                        source={require('./uuDai.png')}
                                    />
                                    <Text style={{
                                        color: '#30303C', alignItems: 'center',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        marginRight: 10
                                        //backgroundColor: 'red'
                                    }}>Ưu đãi</Text>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    height: 60,
                                    width: 120,
                                    justifyContent: 'center', alignItems: 'center',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 8,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                    marginHorizontal: 11
                                }}>
                                    <Image
                                        style={{
                                            resizeMode: 'contain', height: 40,
                                            borderRadius: 10, width: 55, marginLeft: 4
                                        }}
                                        source={require('./donHang.png')}
                                    />
                                    <Text style={{
                                        color: '#30303C',
                                        alignItems: 'center',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 14,
                                        marginRight: 12
                                        //backgroundColor: 'red'
                                    }}
                                    > Đơn hàng</Text>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    height: 60,
                                    width: 120,
                                    justifyContent: 'center', alignItems: 'center',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 8,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>
                                    <Image
                                        style={{
                                            resizeMode: 'contain', height: 40,
                                            borderRadius: 10, width: 47, marginLeft: 5
                                        }}
                                        source={require('./trungBay.png')}
                                    />
                                    <Text style={{
                                        color: '#30303C', alignItems: 'center',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        marginRight: 10
                                        //backgroundColor: 'red'
                                    }}>Trưng bày</Text>

                                </View>
                            </View>
                        </ScrollView>

                        {/* Danh mục hàng hóa */}
                        <Text style={{ color: '#26313B', fontWeight: 'bold', fontSize: 23, paddingLeft: 12 }}>Danh mục hàng hóa</Text>


                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 12, paddingTop: 20 }}>

                            <Image
                                style={{
                                    height: 80, width: '46%', resizeMode: 'stretch', marginRight: 15, borderRadius: 8
                                }}
                                source={require('./giaoHang.png')}
                            />
                            <Image
                                style={{ height: 80, width: '46%', resizeMode: 'stretch', borderRadius: 8 }}
                                source={require('./Combo.png')}
                            />

                            <Image
                                style={{ height: 80, width: '46%', resizeMode: 'stretch', marginRight: 15, borderRadius: 8, marginTop: 15 }}
                                source={require('./doUong.png')}
                            />
                            <Image
                                style={{ height: 80, width: '46%', resizeMode: 'stretch', borderRadius: 8, marginTop: 15 }}
                                source={require('./banhKeo.png')}
                            />
                        </View>

                        <Text style={{ color: '#26313B', fontWeight: 'bold', fontSize: 23, paddingLeft: 12, paddingTop: 20 }}>Giá tốt mỗi ngày</Text>

                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>


                </View>





            </SafeAreaView>
        </ScrollView>
    )

}

const styles = StyleSheet.create({})