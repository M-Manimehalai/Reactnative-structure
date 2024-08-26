import React, { Component } from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Labels from "../../utils/constants/labels/Labels";
import CommonColors from "../../utils/constants/colors/CommonColors";
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Pie from 'react-native-pie'

class Card extends React.Component {
    render() {
        return (
            <View style={styles.cardView}>
                <View style={styles.textHeaderView}>
                 <Text style={styles.textView}>{Labels.leads}</Text>
                 </View> 
                <View style={styles.innerViewText}>
                    <Text style={styles.textView}>48</Text>
                    <Text style={styles.textView}>14</Text>
                   
                </View>
             
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    cardView: {
        backgroundColor: CommonColors.white,
        borderRadius: Labels.borderRadiusXL,
        marginHorizontal: Labels.m12,
        marginVertical: Labels.m40,
        padding: Labels.p10,
        height: 180,
        //justifyContent: 'center',
      
    },
    textHeaderView: {
        alignItems: 'center',
    },
    innerViewText: {
        flexDirection: 'row',
    justifyContent: 'space-between',
 paddingHorizontal: 28,
 paddingVertical: 40,
        
    },
    textView: {
        //paddingHorizontal: 16,
        fontFamily: Fonts.globalrobotofonts.Rbold,
        fontSize: Labels.headerSize,
        color: CommonColors.black,
    }
});
export default Card;