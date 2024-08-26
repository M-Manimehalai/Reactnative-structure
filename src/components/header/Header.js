import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Labels from '../../utils/constants/labels/Labels';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Feather';
import OcticonIcon from 'react-native-vector-icons/Octicons';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Header extends Component {
    render() {
        return (
            // <View style={styles.headerStyle}>
            //     <View style={styles.headerContainer}>
            //         <View style={styles.imageViewSecond}>
            //             <Image style={styles.headerImageView} source={require('../../assets/images/png/wealth-test.png')} />
            //         </View>
            //         <View style={styles.textView}>
            //             <Text numberOfLines={1} ellipsizeMode={Labels.tail} style={styles.headerText}>{this.props.header}</Text>
            //         </View>
            //     </View>
            // </View>
            <View style={styles.headerStyle}>
                <Icon name="menu" size={24} style={styles.iconView}>
               <View style={styles.textView}>
                <Text style={styles.headerText}>{Labels.dashboard}</Text>
                </View>
                </Icon>

                <OcticonIcon name = "bell" size = {24} style={styles.octiconIcon}></OcticonIcon>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    headerStyle: {
        backgroundColor: CommonColors.darkGreen,
        height: Labels.textBoxHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        paddingHorizontal: Labels.p16,
    },
    textView : {
        paddingHorizontal: Labels.p16,
      
    },
    // headerText: {
    //     fontSize: Labels.headerSize,
    //     color: CommonColors.white,
    //     paddingLeft: Labels.p10,
    //     fontFamily: Fonts.globalrobotofonts.Rbold
    // },
    // headerContainer: { justifyContent: "center", flexDirection: "row" },
    // imageViewSecond: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: Labels.m10 },
    // textView: { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
    // headerImageView: { width: Labels.xxxl, height: Labels.xxxl, marginLeft: Labels.m5 },
    iconView:{color : CommonColors.white },
    headerText : {color : CommonColors.golden,fontFamily: Fonts.globalrobotofonts.Rbold,  fontSize: Labels.headerSize,
    paddingtop : 10},
    octiconIcon : {color : CommonColors.white}
});

export default Header;