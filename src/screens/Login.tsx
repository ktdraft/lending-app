import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput , KeyboardAvoidingView} from 'react-native'
import myStyle from "../style"





export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={[myStyle.container, {alignItems : "center"}]}>
                <View style={[myStyle.flex2]}>
                    <View style={[ myStyle.frLogo]}>
                        <View
                            style={[myStyle.logo]}
                        >
                            <Image
                                style = {[myStyle.logoImg]}
                                source={require("../assets/log.png")}
                            />
                        </View>
                    </View>
                </View>

                <View style={[myStyle.flex4, myStyle.login]}>

                    
                    <View style={[]}>
                        <TextInput
                            style = {[myStyle.inputLogin]}
                            selectionColor='red'
                            placeholder = {"Number Phone"}
                            

                        />
                    </View>

                    <View >
                        <TextInput
                             style = {[myStyle.inputLogin]}
                             placeholder = {"Pass Word"}
                             secureTextEntry={true}
                        />
                    </View>

                    <View style = {[myStyle.frFotgotPassword]}>
                            <Text style = {[myStyle.forgotPassWord]}
                                onPress = {()=>{console.log("óc dog")}}
                            >Quên mật khẩu</Text>

                    </View>

                    <View  style = {[myStyle.frbuttonLogin]}>
                        <View style = {[myStyle.buttonLogin]}>
                            <Button
                                
                                title = {"Login"}
                                onPress = {()=> {}}
                                color = "rgb(246, 196, 0)"
                                
                            />
                        </View>
                    </View>
                    
                    <View>
                        <Button
                            title="Đăng kí tài khoản"
                            color = "none"
                            
                            onPress = {()=>{}}
                        />
                    </View>

                </View>
                
            </KeyboardAvoidingView>
        )
    }
}
