import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const styles = StyleSheet.create({
  registry: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
    paddingLeft: 8,
    width: '100%',
    zIndex: 1,
  },
  close: {
    flexShrink: 0,
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: 'transparent',
  },
  input: {
    flex: 3,
    flexGrow: 1,
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    height: 40,
    maxHeight: 40,
    borderRadius: 8,
  },
  divider: {
    width: '100%',
    height: 2,
  },
  inputServer: {
    flexGrow: 2,
    flex: 2,
    height: 40,
    marginRight: 8,
    marginLeft: 4,
    display: 'flex',
  },
  inputUsername: {
    flexGrow: 2,
    flex: 2,
    height: 40,
    marginRight: 8,
    marginLeft: 4,
    display: 'flex',
  },
  input: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    height: 40,
    maxHeight: 40,
    borderRadius: 8,
  },
  inputUnderline: {
    display: 'none',
  },
  icon: {
    backgroundColor: 'transparent',
  },
  none: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overscrollBehavior: 'none',
  },
  cardsContainer: {
    paddingBottom: 64,
  },
  card: {
    width: '100%',
    height: 48,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderBottomWidth: 1,
  }
});
