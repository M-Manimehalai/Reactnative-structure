import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, View, Text } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import EStyleSheet from 'react-native-extended-stylesheet';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Labels from '../../utils/constants/labels/Labels';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
const Button = (props) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}
                style={[styles.buttonView, { backgroundColor: isNotEmpty(props.backgroundColor) ? props.backgroundColor : CommonColors.primary }]}
            >
                <Text style={[styles.btnText, { color: isNotEmpty(props.color) ? props.color : CommonColors.white }]}>
                    {props.label}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = EStyleSheet.create({
    buttonView: {
        borderColor: CommonColors.white,
        height: Labels.textBoxHeight,
        borderWidth: Labels.borderRadiusXS,
        borderRadius: Labels.borderRadiusLG,
        justifyContent: 'center',
        backgroundColor: CommonColors.primary,
    },
    btnText: {
        justifyContent: 'center',
        fontSize: Labels.md,
        textAlign: 'center',
        color: CommonColors.white,
        fontFamily: Fonts.globalrobotofonts.Rbold
    },
});

export default Button;