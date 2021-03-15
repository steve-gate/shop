import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, SafeAreaView,
    FlatList, Image, Modal, TextInput, Button, ScrollView
} from 'react-native';
import { AntDesign, MaterialCommunityIcons, Feather, FontAwesome5, FontAwesome, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



export default function trangchu2({ navigation }) {

    const Data = [
        {},

    ]

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#0090FD', '#77B6F8',]}
                    style={{ borderBottomLeftRadius: 48, borderBottomRightRadius: 48, }}
                >
                    <View style={{ height: '40%', }}>

                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            paddingBottom: 25, paddingTop: 19, paddingHorizontal: 25,
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Feather name="map-pin" size={24} color="white" />
                                <Text style={{ color: '#FFFFFF', paddingLeft: 10, fontSize: 17 }}>Chi nhánh mặc định</Text>
                            </View>

                            <MaterialCommunityIcons name="bell" size={24} color="white" />

                        </View>

                        <View style={{
                            backgroundColor: '#rgb(255,255,255)',
                            borderRadius: 10, height: 205,
                            width: '90%', alignSelf: 'center',
                            paddingHorizontal: 25,
                            paddingTop: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            //    borderWidth: 2
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View>
                                    <Text style={{ color: '#999999', fontWeight: 'bold', fontSize: 20, }}>Doanh thu ngày</Text>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 25, }}>0</Text>
                                </View>

                                <Text style={{ color: '#4397E4', fontSize: 17, paddingTop: 3 }}>Xem chi tiết > </Text>
                            </View>

                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#999999', paddingTop: 20, }} />

                            <View style={{ flexDirection: 'row', paddingTop: 18, justifyContent: 'space-between' }}>
                                <View style={{}}>
                                    <Text style={{ color: '#999999', fontSize: 17 }}>Đơn hàng</Text>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>0</Text>
                                </View>

                                <View style={{}}>
                                    <Text style={{ color: '#999999', fontSize: 17 }}>Đơn hủy</Text>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>0</Text>
                                </View>

                                <View style={{}}>
                                    <Text style={{ color: '#999999', fontSize: 17 }}>Đơn trả hàng</Text>
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }}>0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{
                    flexDirection: 'row', flexWrap: 'wrap', paddingTop: 60,
                    paddingHorizontal: 15, justifyContent: 'space-between',
                }}>

                    <View style={{}}>
                        <View style={{
                            height: 50, width: 50, borderRadius: 40,
                            backgroundColor: '#2899FF', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <FontAwesome5 name="clipboard-list" size={24} color="white"
                                style={{}} />
                        </View>
                        <Text
                            style={{ width: 80, paddingLeft: 8 }}
                            numberOfLines={2} ellipsizeMode='middle' >Tạo đơn và giao hàng</Text>
                    </View>

                    <View style={{}}>
                        <View style={{
                            height: 50, width: 50, borderRadius: 40,
                            backgroundColor: '#2899FF', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Fontisto name="shopping-store" size={24} color="white" />

                        </View>
                        <Text
                            style={{ width: 60, paddingLeft: 8 }}
                            numberOfLines={2} ellipsizeMode='head' >Tạo đơn tại quầy</Text>
                    </View>

                    <View style={{}}>
                        <View style={{
                            height: 50, width: 50, borderRadius: 40,
                            backgroundColor: '#25D490', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Fontisto name="shopping-basket-add" size={24} color="white" />
                        </View>
                        <Text
                            style={{ width: 70, paddingLeft: 8 }}
                            numberOfLines={2} ellipsizeMode='middle' >Thêm sản phẩm</Text>
                    </View>

                    <View style={{}}>
                        <View style={{
                            height: 50, width: 50, borderRadius: 40,
                            backgroundColor: '#25D490', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <FontAwesome5 name="cart-arrow-down" size={24} color="white"
                            />
                        </View>
                        <Text
                            style={{ width: 80, paddingLeft: 8 }}
                            numberOfLines={2} ellipsizeMode='head' >Tạo đơn nhập hàng</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row', flexWrap: 'wrap', paddingTop: 20
                    , paddingHorizontal: 10
                }}>

                    <View style={{}}>
                        <View style={{
                            height: 50, width: 50, borderRadius: 40,
                            backgroundColor: '#FFB10F', alignSelf: 'center', alignItems: 'center', justifyContent: 'center',

                        }}>
                            <FontAwesome name="clipboard" size={24} color="white"
                            />
                        </View>
                        <Text
                            style={{ width: 80, paddingLeft: 8 }}
                            numberOfLines={2} ellipsizeMode='head' >Tạo phiếu thu chi</Text>
                    </View>

                    <View style={{ paddingLeft: 18 }}>
                        <View style={{
                            height: 50, width: 50, borderRadius: 40,
                            backgroundColor: '#25D490', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <FontAwesome5 name="warehouse" size={24} color="white" />
                        </View>
                        <Text
                            style={{ width: 90, paddingLeft: 8 }}
                            numberOfLines={2} ellipsizeMode='head' >Quản lý kho</Text>

                    </View>
                </View>
            </View>



        </SafeAreaView >
    )
}