import { offWhite, light, offBlack } from '../../colors'

const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  body: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  dateCard: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dateText: {
    color: offBlack,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    color: offBlack
  },
  generateCard: {
    // TODO: Border Radius
  },
  generateCardHeader: {
    backgroundColor: light,
  },
  generateCardForm: {
    backgroundColor: light,
  }
};