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
  dateTextContainer: {
    flexDirection: 'row'
  },
  dateText: {
    marginLeft: 7,
    color: offBlack,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    color: offBlack
  },
  generateCard: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
  generateCardHeader: {
    backgroundColor: light,
  },
  generateCardForm: {
    backgroundColor: light,
  }
};