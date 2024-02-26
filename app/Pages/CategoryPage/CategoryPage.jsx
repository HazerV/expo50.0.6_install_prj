import React from "react";
import {View, Dimensions, Text, ScrollView, StyleSheet, SafeAreaView} from "react-native";
import ButtonComponents from "../../Components/GoodsComponents/ButtonComponent/ButtonComponents";
import CategoryHeader from "../../Components/PageComponents/Header/CategoryHeader/CategoryHeader";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../config";
import PodCategoryButton from "../../Components/PageComponents/CategoryPageComponents/PodCategory/PodCategoryButton";
import Footer from "../../Components/PageComponents/Footer/Footer";
import Filtering from "../../Components/PageComponents/CategoryPageComponents/Filtering/Filtering";
import GoodsInCategory from "../../Components/GoodsComponents/GoodsInCategory/GoodsInCategory";
import ButtonsInFooter from "../../Components/PageComponents/Footer/ButtonsInFooter/ButtonsInFooter";
import FooterInfo from "../../Components/PageComponents/InfoPageComp/FooterInfo/FooterInfo";


const CategoryPage = () => {

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: '100%', backgroundColor: 'white'}}>
                <CategoryHeader text={'Парфюмерия'}/>
                <View style={styles.container}>
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>
                            Lorem ipsum dolor sit amet, Carbone de Balmain Eau de Toilette Balmain (в России
                            известен как «Бальман Карбон»), выпущенный в 2010 году, классифицируется как аромат для
                            мужчин и принадлежит семействам Пряные и Древесные. adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        paddingTop: wp(3.05),
                        gap: wp(3.05),
                        paddingBottom: wp(4)
                    }}>
                        <PodCategoryButton text={'Подкатегория '}/>
                        <PodCategoryButton text={'Подкатегория вторая'}/>
                        <PodCategoryButton text={'Подкатегория 2333'}/>
                        <PodCategoryButton text={'Парфюм 7'}/>
                        <PodCategoryButton text={'Духи'}/>
                    </View>
                    <Filtering />
                </View>
                <View style={styles.mainBlock}>
                    <GoodsInCategory route={'ProductPage'} newPrice={1500} firstPrice={2100} description={'Доступен от 3 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1700} route={'ProductPage'} firstPrice={2100} description={'Доступен от 5 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1800} firstPrice={2100} route={'ProductPage'} description={'Доступен от 7 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1100} firstPrice={1900} route={'ProductPage'} description={'Доступен от 3 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1500} firstPrice={2100} description={'Доступен от 3 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1700} firstPrice={2100} description={'Доступен от 5 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1800} firstPrice={2100} description={'Доступен от 7 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                    <GoodsInCategory newPrice={1100} firstPrice={1900} description={'Доступен от 3 мл'} name={'Духи AMOUAGE Beach Hut (на распив)'  }/>
                </View>
                <Footer />
            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 0,
                alignItems: 'center',
                left: 0,
                right: 0,
                paddingBottom: wp(5)
            }}>
                <ButtonsInFooter />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    mainBlock: {
        paddingLeft: wp(2.5),
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: wp(5),
        paddingBottom: 100
    },
    description: {
        width: wp(95),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingBottom: wp(3.5),
        alignItems: 'center',
        justifyContent: 'center',

    },
    descriptionText: {
        textAlign: 'center',
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        paddingTop: wp(3.05)
    }
})

export default CategoryPage
