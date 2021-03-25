import React, { useState, useEffect, useCallback } from 'react';
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
    const [anHien2, setanHien2] = useState(false)


    const [anHien1, setanHien1] = useState(false);

    const [anHien3, setanHien3] = useState(false)

    const [sum, setSum] = useState(0)
    const [text, setText] = useState()

    const [sp, setSp] = useState([]);
    const [title, setTitle] = useState('');

    const [spGio, setSpGio] = useState()

    const dispatch = useDispatch();




    const filteredProducts = useSelector(state => state.products.products.filter(
        products => {
            return products.category == title
        }
    ))

    //! Hien thi chi tiet san pham trong gio hang


    const spGio2 = useSelector(state => state.products.products.filter(
        products => {
            return products.id == spGio
        }
    ))






    // console.log(filteredProducts)
    /* useEffect(() => {
        filteredProducts
    }, []) */

    const [products, setProducts] = useState()
    // console.log(products)

    // ! Hàm tìm kiếm sản phẩm 
    const search = (text) => {
        if (text) {
            const newData = filteredProducts.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : "".toUpperCase()

                    const textData = text.toUpperCase()
                    return itemData.indexOf(textData) > -1
                }
            )
            setProducts(newData)
            console.log(newData)
            setText(text)
            console.log(text)
            setanHien1(false)

        }
        else {
            setProducts(filteredProducts)
            setText(text)
            setanHien1(true)

        }
    }

    //   console.log(filteredProducts)
    //console.log(sp)

    const cartItems = useSelector(state => state.cartItems.cartItems)
    console.log(cartItems.length)

    let result = 0;
    cartItems.forEach(item => result += (item.quantity * item.Price))



    /*   const addToCart = (itemData) => {
          dispatch({
              type: "addToCart",
              item: itemData
          });
      }
      const addCartHandler = (book) => {
  
          let qty = 1;
          book.quantity = qty;
  
          addToCart(book);
          getItemsCount();
  
      }
   */

    //Them sp vao gio hang
    const addToCart2 = (itemData) => {
        dispatch({
            type: "AddToCart",
            item: itemData
        })
    }

    const addCartHandler = (book) => {

        let qty = 1;
        book.quantity = qty;

        addToCart2(book);

    }
    /*   const getItemsCount = () => {
          setCount(count + 1)
      } */


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

    //! Chọn danh sách sản phẩm theo loại hàng
    const renderItemsFunction = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}
                onPress={
                    () => {
                        setTitle(item.title),
                            setProducts(filteredProducts),
                            setanHien1(true),
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

    //! hiển  thị các sản phẩm theo category
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
            <TouchableOpacity
                style={styles.item2}
                onPress={() => {
                    setSp(sp), setanHien0(true)
                }

                }>
                <View style={{
                    //    flexDirection: 'row',
                    //    backgroundColor: 'red',
                    flex: 1,
                    //        borderBottomWidth: 0.5,
                    //    borderBottomColor: 'gray',
                    marginBottom: 5,
                    //     borderWidth: 3,
                    width: '100%',
                    height: '100%',
                }}>
                    <Image
                        style={{
                            width: "90%",
                            height: "75%",
                            resizeMode: "contain",
                            borderRadius: 5,
                            //   backgroundColor: "black"
                        }}
                        source={{
                            uri: item.image
                        }}
                    />

                    <View style={{
                        //    paddingLeft: 25,
                        //backgroundColor: 'orange',
                        //    justifyContent: "space-around"
                    }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                //  width: '50%',
                            }}
                            numberOfLines={2}
                            resizeMode="tail"
                        >{item.title}</Text>

                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: 'red',
                                paddingTop: 5
                                //  width: '50%',
                            }}
                            //   numberOfLines={2}
                            resizeMode="tail"
                        >Price: {item.Price}$</Text>

                        {/*                         <View style={{
                            height: 35,
                            width: '30%',
                            borderWidth: 1,
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

                        </View> */}

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    //! danh sach SP trong gio hang
    const spCart = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setSpGio(item.id);
                //setSp(spGio2);
                setanHien2(true)
            }}>
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
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            flex: 1,
            //          backgroundColor: "gray",
        }} >
            {/* //! chọn danh mục sản phẩm */}
            {!anHien && !anHien0 && !anHien2 && (
                <View style={{ flex: 1, }} >
                    <FlatList
                        style={{ marginTop: 5 }}
                        data={categories}
                        numColumns={2}
                        renderItem={renderItemsFunction} />
                </View>
            )
            }

            {/* //! phân loại sản phẩm theo loại hàng */}
            {anHien && !anHien0 && !anHien2 && (
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 5,
                        paddingTop: 40,
                        backgroundColor: '#2BA0FC',
                        alignItems: 'center',

                    }}>
                        <TouchableOpacity onPress={() => setanHien(false)}>
                            <AntDesign style={{ paddingBottom: 5 }} name="left" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: 40,
                            width: '80%',
                            backgroundColor: 'white',
                            borderRadius: 8,
                            marginBottom: 8,
                            //  justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <AntDesign name="search1" size={24} color="gray"
                                style={{ alignSelf: 'center', paddingHorizontal: 5 }} />
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '80%',
                                }}
                                placeholder="Bạn tìm gì hôm nay ?"
                                onChangeText={(text) => search(text)}
                                value={text}

                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign style={{ paddingBottom: 5 }} name="shoppingcart" size={24} color="white" />
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        //    margin: 10,
                        flex: 1,
                    }}>
                        <FlatList
                            data={!anHien1 ? products : filteredProducts}
                            renderItem={spCategory}
                            numColumns={2}
                            horizontal={false}
                        />
                    </View>
                </View>
            )
            }

            {/* //! Chi tiết sản phẩm */}
            {
                anHien && anHien0 && !anHien2 && (
                    <View style={{
                        flex: 1,
                        backgroundColor: "white",
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            //  paddingHorizontal: 5,
                            height: 50,
                            backgroundColor: "white",
                            marginTop: 30,
                            paddingHorizontal: 15
                        }}>
                            <TouchableOpacity style={{
                                alignSelf: 'center',
                                backgroundColor: "#919191",
                                borderRadius: 20,
                                height: 30,
                                width: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => setanHien0(false)}>
                                <AntDesign name="left" size={24} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                alignSelf: 'center',
                                backgroundColor: "#919191",
                                borderRadius: 20,
                                height: 30,
                                width: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => setanHien(false)}>
                                <AntDesign name="shoppingcart" size={24}
                                    color="white" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            <View style={{}}>
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
                                    //    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    paddingVertical: 10,
                                    paddingLeft: 7
                                    // backgroundColor: 'gray',
                                }}>
                                    <View style={styles.box}>
                                        <Text style={{
                                            fontSize: 18,
                                            //           alignSelf: 'center',
                                            fontWeight: 'bold',
                                        }}>{sp.title}</Text>
                                    </View>

                                    <View style={styles.box}>
                                        <Text style={{
                                            fontSize: 17,
                                            //alignSelf: 'center',
                                            fontWeight: 'bold',
                                            color: 'red'
                                        }}>{sp.Price}$</Text>
                                    </View>

                                    <View style={styles.box}>
                                        <Text style={{
                                            fontSize: 18,
                                            //alignSelf: 'center',
                                            fontWeight: 'bold',
                                        }}>Mô tả</Text>
                                        <Text style={{
                                            fontSize: 17,
                                            paddingTop: 5
                                        }}>{sp.Description}</Text>
                                    </View>


                                </View>
                            </View>

                            {/* 
                      //! Địa chỉ giao hàng
                      */}
                            <View style={{
                                backgroundColor: '#F0F0F0',
                                height: 10
                            }} />

                            <View style={{
                                paddingHorizontal: 13,

                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    height: 50,
                                    //      backgroundColor: 'gray',
                                    alignItems: 'center',
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: 'gray',
                                }}>
                                    <Text style={{
                                        fontSize: 18
                                        , fontWeight: 'bold',
                                        color: '#323232'
                                    }}>Nhập địa chỉ giao hàng </Text>
                                    <AntDesign name="right" size={20} color="gray" />
                                </View>

                                <Text style={{
                                    fontSize: 16,
                                    paddingVertical: 10,
                                    color: '#323232'
                                }}>Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian
                                    & chi phí giao hàng một cách chính xác nhất</Text>
                            </View>

                            <View style={{
                                backgroundColor: '#F0F0F0',
                                height: 10
                            }} />
                        </ScrollView>

                        <View style={{
                            alignItems: 'center',
                            marginTop: 10

                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#FF414E',
                                    width: '80%',
                                    height: 45,
                                    //     alignSelf: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    addCartHandler(sp);
                                    setanHien(false);
                                }
                                }
                            >
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                    fontSize: 18
                                }}>
                                    Add To Cart
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

            {/* //! Giỏ hàng */}
            {
                !anHien && anHien0 && !anHien2 && (
                    <View style={{ flex: 1 }}>

                        {/* //! Gio hang co san pham */}
                        {
                            (cartItems.length > 0) && (
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
                                            <Text style={{
                                                color: 'red',
                                                fontWeight: 'bold',
                                                fontSize: 17
                                            }}>{result}</Text>

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

                                </View >
                            )
                        }

                        {/* //! Gio hang luc khong co san pham */}
                        {
                            (cartItems.length == 0) && (
                                <View style={{
                                    flex: 1,
                                    backgroundColor: '#EEEEEE',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        paddingBottom: 25,
                                        fontSize: 20, fontWeight: 'bold',

                                    }}>Bạn chưa có sản phẩm nào trong giỏ hàng</Text>

                                    <View style={{
                                        backgroundColor: '#FF414E',
                                        height: 50,
                                        width: '80%',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            setanHien(false);
                                            setanHien0(false);
                                            setanHien2(false);
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 23
                                            }}>Tiếp Tục Mua Sắm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    </View>

                )
            }

            {/* //! xem chi tiết sản phẩm trong giỏ hàng */}
            {
                !anHien && anHien0 && anHien2 && (
                    spGio2.map(sp => {
                        return (
                            <View style={{
                                flex: 1,
                                backgroundColor: "white",
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    //  paddingHorizontal: 5,
                                    height: 50,
                                    backgroundColor: "white",
                                    marginTop: 30,
                                    paddingHorizontal: 15
                                }}>
                                    <TouchableOpacity style={{
                                        alignSelf: 'center',
                                        backgroundColor: "#919191",
                                        borderRadius: 20,
                                        height: 30,
                                        width: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} onPress={() => setanHien2(false)}>
                                        <AntDesign name="left" size={24} color="white" />
                                    </TouchableOpacity>

                                    {/*        <TouchableOpacity style={{
                                        alignSelf: 'center',
                                        backgroundColor: "#919191",
                                        borderRadius: 20,
                                        height: 30,
                                        width: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} onPress={() => setanHien(false)}>
                                        <AntDesign name="shoppingcart" size={24}
                                            color="white" />
                                    </TouchableOpacity> */}
                                </View>

                                <ScrollView>
                                    <View style={{}}>
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
                                            //    alignItems: 'center',
                                            justifyContent: 'space-around',
                                            paddingVertical: 10,
                                            paddingLeft: 7
                                            // backgroundColor: 'gray',
                                        }}>
                                            <View style={styles.box}>
                                                <Text style={{
                                                    fontSize: 18,
                                                    //           alignSelf: 'center',
                                                    fontWeight: 'bold',
                                                }}>{sp.title}</Text>
                                            </View>

                                            <View style={styles.box}>
                                                <Text style={{
                                                    fontSize: 17,
                                                    //alignSelf: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'red'
                                                }}>{sp.Price}$</Text>
                                            </View>

                                            <View style={styles.box}>
                                                <Text style={{
                                                    fontSize: 18,
                                                    //alignSelf: 'center',
                                                    fontWeight: 'bold',
                                                }}>Mô tả</Text>
                                                <Text style={{
                                                    fontSize: 17,
                                                    paddingTop: 5
                                                }}>{sp.Description}</Text>
                                            </View>


                                        </View>
                                    </View>

                                    {/* 
                      //! Địa chỉ giao hàng
                      */}
                                    <View style={{
                                        backgroundColor: '#F0F0F0',
                                        height: 10
                                    }} />

                                    <View style={{
                                        paddingHorizontal: 13,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            height: 50,
                                            //      backgroundColor: 'gray',
                                            alignItems: 'center',
                                            borderBottomWidth: 0.5,
                                            borderBottomColor: 'gray',
                                        }}>
                                            <Text style={{
                                                fontSize: 18
                                                , fontWeight: 'bold',
                                                color: '#323232'
                                            }}>Nhập địa chỉ giao hàng </Text>
                                            <AntDesign name="right" size={20} color="gray" />
                                        </View>

                                        <Text style={{
                                            fontSize: 16,
                                            paddingVertical: 10,
                                            color: '#323232'
                                        }}>Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian
                                            & chi phí giao hàng một cách chính xác nhất</Text>
                                    </View>

                                    <View style={{
                                        backgroundColor: '#F0F0F0',
                                        height: 10
                                    }} />
                                </ScrollView>
                            </View>
                        )

                    })
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
    item2: {
        flex: 1,
        height: 250,
        backgroundColor: "white",
        /*        borderRadius: 5,
               shadowColor: "gray",
               shadowOpacity: 0.4,
               shadowOffset: {width: 0, height: 2 },
            shadowRadius: 2,
            elevation: 2,
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            margin: 5 */
        borderBottomWidth: 0.5,
        borderBottomColor: '#8F8F8F',
        borderLeftWidth: 0.5,
        padding: 7
    },
    text: {
        fontSize: 15,
        alignContent: "flex-end",
        marginTop: 10
    },
    box: {
        /*     height: 50,
            width: '90%',
            borderWidth: 0.5,
            borderColor: 'gray',
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: "space-between", */
        padding: 7
        //  backgroundColor: 'orange'
    }
})