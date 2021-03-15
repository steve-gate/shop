import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, SafeAreaView,
    FlatList, Image, Modal, TextInput, Button, ScrollView
} from 'react-native';
import { AntDesign, MaterialCommunityIcons, Feather, FontAwesome5, FontAwesome, Fontisto } from '@expo/vector-icons';

export default function hopthu({ navigation }) {
    return (
        <View style={{ backgroundColor: '#F3F3F3' }}>

            <View style={{
                backgroundColor: '#FFFFFF', paddingLeft: 4,
                flexDirection: 'row', height: 80, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'gray'
            }}>
                <Image
                    style={{ height: 45, width: 45, resizeMode: 'stretch', borderRadius: 8 }}
                    source={require('./loa.png')}
                />
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', paddingBottom: 3, }}>Tin tức</Text>
                    <Text style={{ color: 'gray' }}>Tin tức,tính năng mới,bảo trì,khuyến mãi</Text>
                </View>
            </View>

            <View style={{
                backgroundColor: '#FFFFFF', paddingLeft: 4,
                flexDirection: 'row', height: 80, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'gray'
            }}>
                <Image
                    style={{ height: 45, width: 45, resizeMode: 'stretch', borderRadius: 8 }}
                    source={require('./shop.png')}
                />
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', paddingBottom: 3, }}>Hàng hóa</Text>
                    <Text style={{ color: 'gray' }}>Ưu đãi,thông tin hàng hóa</Text>
                </View>
            </View>

        </View>
    )
}