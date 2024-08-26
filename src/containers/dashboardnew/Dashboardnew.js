import React, { Component } from 'react';
import {View,Text,Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../../components/header/Header';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Card from '../../components/card/Card';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Dashboardnew extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
       
    }
    componentDidMount = () => {
    }
    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }
    render(){
        return(
            <View>
                <Header/>
                <View style = {styles.lineView}/>
                <View  style={styles.targetView}>
                <Card style = {styles.cardView}/>
                </View>
               
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    targetView:{
            width: Labels.width100, 
            height: Labels.containerHeight, 
            backgroundColor: CommonColors.darkGreen,
    },
    lineView:{
            width: Labels.width100, 
            height: Labels.lineHeight,
            backgroundColor: CommonColors.golden,
          },
    
    
});
export default Dashboardnew;