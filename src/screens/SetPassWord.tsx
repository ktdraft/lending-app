import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import myStyle from "../style";
import LogoLogin from "../components/LogoLogin";

import { Actions } from "react-native-router-flux";

import * as action from "../Action/ActionLogin";
import { connect } from "react-redux";
import { UserService } from "../services/UserService";
import PopupConfirm from "../components/PopupConfirm";
import * as actionPopup from "../Action/ActionPopup";
import I18n from "../i18n/i18n";

class setPassword extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkbox: false,
      getPass: "",
      getAgainPass: "",
      checkSuccess: false,
    };
  }


  checkSetPassword = () => {
    var getPass: any = this.state.getPass;
    var getAgainPass: any = this.state.getAgainPass;
    var error = UserService.checkValidate(getPass, getAgainPass);


    if (error) {
      actionPopup.showMessage(error);
      this.setState({
        checkSuccess: false,
      });
    } else {
      if (this.props.typeAction == "signUp") {
        var getReferral = this.props.codeReferal;

        UserService.register(
          this.props.phoneNumber,
          getPass,
          this.props.codeOTP,
          getReferral
        ).then((res) => {
          // actionPopup.showMessage(res);
          Actions.login();
        });
      } else {
        UserService.setPassword(
          this.props.phoneNumber,
          getPass,
          this.props.codeOTP
        ).then((res) => {
          // actionPopup.showMessage(res);
          Actions.login();
        });
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={[myStyle.container, myStyle.fullCeter, { alignItems: "center" }]}
      >
        <View style={[]}>
          <View style={[myStyle.frLogo]}>
            <View
              style={[
                {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={[myStyle.headerSignUp]}>{I18n.t('screens.enterYourPassword.enterYourPasswordTitle')}</Text>
            </View>
          </View>
        </View>

        <View style={[, myStyle.login]}>
          <View style={[]}>
            <TextInput
              autoFocus={true}
              ref={"pass"}
              style={[myStyle.inputLogin]}
              selectionColor="red"
              placeholder={I18n.t('screens.login.passwordInputPlaceholder')}
              maxLength={32}
              onSubmitEditing={() => this.checkSetPassword()}
              secureTextEntry={!this.state.checkbox}
              value={this.state.getPass}
              onChangeText={(text) => {
                this.setState({
                  getPass: text
                });
              }}
            />
          </View>

          <View>
            <TextInput
              ref={"passAgain"}
              style={[myStyle.inputLogin]}
              placeholder={I18n.t('screens.enterYourPassword.confirmPasswordPlaceHolder')}
              secureTextEntry={!this.state.checkbox}
              maxLength={32}
              onSubmitEditing={() => this.checkSetPassword()}
              onChangeText={(text) => {
                this.setState({
                  getAgainPass: text
                });
              }}
            />
          </View>

          <View style={[myStyle.row, { marginTop: 10 }]}>
            <CheckBox
              value={this.state.checkbox}
              onChange={() => {
                this.setState({ checkbox: !this.state.checkbox });
              }}
            />
            <Text
              style={[myStyle.colorWhite, { marginLeft: 10, fontSize: 12 }]}
              onPress={() => {
                this.setState({ checkbox: !this.state.checkbox });
              }}
            >
              {I18n.t('screens.enterYourPassword.showPassword')}
            </Text>
          </View>

          <View style={[myStyle.frbuttonLogin]}>
            <TouchableOpacity
              style={[myStyle.buttonLogin]}
              activeOpacity={0.7}
              onPress={(event) => {
                this.checkSetPassword();
              }}
            >
              <Text style={[myStyle.textButton]}>{I18n.t('screens.enterOTP.confirmButtonText')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

type props = {
  typeAction: string;
  phoneNumber: string;
  codeOTP: string;
  codeReferal: string;
};

type state = {
  checkSuccess: boolean;
  checkbox: boolean;
  getPass: string;
  getAgainPass: string;
};

function mapStateToProps(state: any) {
  return {
    typeAction: state.LoginReducer.actionType,
    phoneNumber: state.LoginReducer.numberPhone,
    codeOTP: state.LoginReducer.codeOTP,
    codeReferal: state.LoginReducer.referalCode,
  };
}

function mapDispatchToProps(dispatch: any, props: any) {
  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(setPassword);
