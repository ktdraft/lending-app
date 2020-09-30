import { Referal } from "@Core/model/user/Referal";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HistoryDetail from "./HistoryDetail";
import I18n from "../../i18n/i18n";
import { MyFormat } from "../../Helper/MyFormat";


export default class MyReferrals extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container2}>
                <FlatList data={this.props.myReferrals}
                    renderItem={({ item }) =>
                        <HistoryDetail
                            type={true}
                            typeLabel={I18n.t('screens.referral.refHistories.earnedTitle')}
                            title={this.hidePhoneNumber(item.toUser?.username)}
                            time={MyFormat.getTime(item.createdAt)}
                        />}
                    keyExtractor={(item: Referal, index: number) => item._id || index.toString()} />
            </View>
        )
    }

  

    hidePhoneNumber = (phone: string | undefined) => {
        if (phone) return 'xxxx ' + phone.slice(phone.length-3);
        else return 'undefined'
    }
}

const styles = StyleSheet.create({
    container2: {
        paddingBottom: 10,
        paddingTop: 10,
        // backgroundColor: color.backgound
    },
})

type Props = {
    myReferrals: Referal[]
}

type State = {

}