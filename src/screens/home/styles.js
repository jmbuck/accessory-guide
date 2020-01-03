import { offWhite, light, dark } from '../../colors'

const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  body: {
    backgroundColor: offWhite,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateCard: {
    // TODO: Border Radius
  },
  dateCardItem: {
    backgroundColor: light,
  },
  text: {
    color: dark,
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