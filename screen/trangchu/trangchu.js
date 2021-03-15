import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, SafeAreaView,
    FlatList, Image, Modal, TextInput, Button, ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';




export default function trangchu({ navigation }) {
    const DATA = [
        { id: 1, title: 'First Item', gia: 100000, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDfVulz83jNlCroRvIiAAslXCpqjZVlRlgw&usqp=CAU' },
        { id: 2, title: 'Second Item', gia: 200000, uri: 'https://kenh14cdn.com/2017/18443165-1037563586373638-4179581797002117120-n-1501669599648.jpg' },
        { id: 3, title: 'Third Item', gia: 300000, uri: 'https://vtv1.mediacdn.vn/thumb_w/650/2017/the-morality-of-candy-1494748432267.jpg' },
        { id: 4, title: 'Third Item', gia: 400000, uri: 'https://thotinh.com.vn/wp-content/uploads/2017/10/mo-banh-keo.jpg' },
        { id: 5, title: 'Third Item', gia: 500000, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdOCOLf04qaX961ZMCdgKEtgtnvmAjOIptQ&usqp=CAU' },
    ];

    const Item = ({ title, gia, uri, onPress }) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Image
                    source={{ uri }}
                    style={{
                        width: 56,
                        height: 56,
                        borderWidth: 1,
                        borderColor: '#d35647',
                        borderRadius: 8,
                        resizeMode: 'contain',
                        //   margin: 8,
                        alignSelf: 'flex-start',
                        // backgroundColor: 'orange'
                    }}
                />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.gia}>{gia}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            gia={item.gia}
            uri={item.uri}
            onPress={() => setModalVisible(true)}
        />
    );

    const [modalVisible, setModalVisible] = useState(false);

    const [soluong, setSoLuong] = useState(0)

    return (
        <View style={{ flex: 1 }} >
            <AntDesign name="shoppingcart" size={24} color="black" />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>

                    <View style={{ backgroundColor: '#FFFFFF', height: '80%', borderTopRightRadius: 28, borderTopLeftRadius: 28 }} >

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ height: 50, backgroundColor: '#FFFFFF', borderTopRightRadius: 28, borderTopLeftRadius: 28 }}>
                            <AntDesign name="closecircleo" size={24} color="black" style={{ alignSelf: 'flex-end', justifyContent: 'center', paddingTop: 15, paddingRight: 15 }} />
                        </TouchableOpacity>


                        <ScrollView>

                            <View style={{
                                //backgroundColor: 'red'
                            }}>

                                <View style={{
                                    width: '80%',
                                    height: 200,
                                    //      backgroundColor: 'gray',
                                    alignSelf: 'center',
                                    flex: 1,
                                }}>
                                    <Swiper autoplay={true} >


                                        <Image
                                            source={{ uri: 'https://vtv1.mediacdn.vn/thumb_w/650/2017/the-morality-of-candy-1494748432267.jpg' }}
                                            style={{
                                                width: '100%',
                                                height: 200,
                                                borderColor: '#d35647',
                                                borderRadius: 8,
                                                resizeMode: 'contain',

                                                alignSelf: 'center',

                                                //  backgroundColor: 'orange'
                                            }}
                                        />



                                        <Image
                                            source={{ uri: 'https://bianhapkhau.net/wp-content/uploads/2020/05/bia-heineken-0-%C4%91%E1%BB%99-chai-330ml.jpg' }}
                                            style={{
                                                width: '100%',
                                                height: 200,
                                                borderColor: '#d35647',
                                                borderRadius: 8,
                                                resizeMode: 'contain',

                                                alignSelf: 'center',

                                                //  backgroundColor: 'orange'
                                            }}
                                        />

                                    </Swiper>
                                </View>

                                <View style={{ paddingHorizontal: 18, paddingTop: 25 }}>
                                    <Text style={{ fontSize: 22, color: '#2B3544', fontWeight: 'bold' }}>[Tết] Bia Hà Nội lon 330ml </Text>
                                    <Text style={{ fontSize: 15, color: '#86878D', fontWeight: 'bold', paddingVertical: 12 }}>Thùng 24 lon</Text>
                                    <Text style={{ fontSize: 17, color: '#CF2E2F', fontWeight: 'bold' }}>233,000đ</Text>

                                    {/*  */}
                                    <Text style={{ fontSize: 22, color: '#2B3544', fontWeight: 'bold', paddingTop: 17 }}>Thông tin sản phẩm</Text>
                                    <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                                        <Text style={{ fontSize: 15, color: '#86878D', fontWeight: 'bold', paddingRight: 59 }}>Xuất xứ</Text>
                                        <Text style={{ fontSize: 15, color: '#2B3544', fontWeight: 'bold' }}>Việt Nam</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 15, color: '#86878D', fontWeight: 'bold', paddingRight: 46 }}>Dung tích</Text>
                                        <Text style={{ fontSize: 15, color: '#2B3544', fontWeight: 'bold' }}>330ml</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                                        <Text style={{ fontSize: 15, color: '#86878D', fontWeight: 'bold', paddingRight: 25 }}>Hạn sử dụng</Text>
                                        <Text style={{ fontSize: 15, color: '#2B3544', fontWeight: 'bold' }}>1 năm (từ ngày sx)</Text>
                                    </View>

                                    {/*  */}
                                    <Text style={{ fontSize: 22, color: '#2B3544', fontWeight: 'bold', paddingTop: 10 }}>Mô tả</Text>
                                    <View style={{ paddingLeft: 20, paddingTop: 17 }}>
                                        <Text style={{ color: '#696D73', fontSize: 15 }}>Không dành cho người dưới 18 tuổi</Text>
                                        <Text style={{ color: '#696D73', fontSize: 15, paddingVertical: 8 }}>Không dùng thuốc uống này khi tham gia giao thông</Text>
                                        <Text style={{ color: '#696D73', fontSize: 15, }}>Bao bì sản phẩm có thể thay đổi theo từng lô sản xuất</Text>
                                    </View>


                                </View>

                            </View>

                        </ScrollView>


                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderTopWidth: 0.3, height: 65, borderColor: 'gray', }}>

                            <TouchableOpacity style={{
                                backgroundColor: '#EAF0EC', width: 30, height: 30,
                                borderRadius: 8, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <AntDesign name="minus" size={24} color="#5684FB" style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} />
                            </TouchableOpacity>

                            <TextInput style={{
                                width: '60%', height: 40, borderWidth: 0.3, borderColor: 'gray',
                                borderRadius: 8, paddingHorizontal: 4, marginHorizontal: 4,
                            }}
                                value={soluong}
                            //  placeholder="Số Lượng:"
                            >
                                <Text style={{ color: 'gray' }}>Số Lượng:{soluong}</Text>
                            </TextInput>

                            <TouchableOpacity style={{
                                backgroundColor: '#EAF0EC', width: 30, height: 30,
                                borderRadius: 8, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <AntDesign name="plus" size={24} color="#5684FB" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{
                            marginBottom: 10, borderRadius: 8,
                            alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3369FD',
                            height: 40, width: 260
                        }}  >
                            <Text style={{
                                color: 'white', justifyContent: 'center',
                                alignItems: 'center', alignSelf: 'center', fontSize: 16, fontWeight: 'bold'
                            }}>Thêm vào giỏ hàng</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal >


            <SafeAreaView >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View >
    )

}

const styles = StyleSheet.create({})