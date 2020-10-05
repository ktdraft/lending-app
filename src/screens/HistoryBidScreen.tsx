import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WinBid from '../components/bid-statistic/WinBid';
import LoseBid from '../components/bid-statistic/LoseBid';
import * as color from '../Color'
import { title } from 'process';
import I18n from '../i18n/i18n';
const Tab = createMaterialTopTabNavigator();

export default class HistoryBidScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: { backgroundColor: color.primary },
          activeTintColor: '#fff',
          style: { backgroundColor: color.background },
          
        }}>
        <Tab.Screen name='WinBid' component={WinBid} options={{ tabBarLabel: I18n.t('screens.myBid.tabName.win') }} />
        <Tab.Screen name='LoseBid' component={LoseBid} options={{ tabBarLabel: I18n.t('screens.myBid.tabName.lose') }} />
      </Tab.Navigator>
    )
  }
}