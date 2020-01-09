import { offWhite, accent, light, offBlack } from '../../colors'

const addButtonWidth = 65
export default {
  body: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  listCard: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  addButton: {
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
    backgroundColor:  accent,
    color: offWhite,
    right: 0,
    bottom: 0,
    width: addButtonWidth,
    height: addButtonWidth,
    borderRadius: addButtonWidth * .5
  }
};