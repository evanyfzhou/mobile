import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  startingScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  startingScreenText: {
    color: 'white',
    padding: 20
  },
  startingScreenInnerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  confirmScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  confirmScreenInnerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  confirmScreenText: {
    color: 'black',
    paddingBottom: 5
  },
  confirmScreenButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gameScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  gameScreenText: {
    color: 'blue',
    paddingLeft: 15,
    paddingRight: 15
  },
  gameScreenLogoutButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 5,
    zIndex: 9999
  },
  gameScreenCard: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 5
  },
  gameScreenTextInput: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    paddingTop: 50,
    paddingBottom: 50
  },
  imageContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  gameScreenButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
