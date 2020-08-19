import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import myStyle from "../style"
import ChartHome from '../components/ChartHome';
import ListStatisticalBasic from '../components/ListStatisticalBasic';
import ListHistoryInterest from '../components/ListHistoryInterest';


export default class Home extends Component<props , state> {
    constructor(props : any ){
        super(props );
        this.state = {
            
        }
    }
    
    render() {
        return (
            <ScrollView style = {[myStyle.container]} showsVerticalScrollIndicator = {false}>
                <View style = {[myStyle.container]}>
                    <View style = {[myStyle.charHome]}>
                        <ChartHome ></ChartHome>
                    </View>
                    <View style = {[]}>
                        <ListStatisticalBasic></ListStatisticalBasic>
                    </View>
                    <View style = {[]}>
                        <ListHistoryInterest></ListHistoryInterest>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

type props = {

}
type state = {
    data : Array<any>
}