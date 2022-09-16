import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
import {theme} from '../../../styles/styles';

const {width} = Dimensions.get('window');

const item = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: '30@vs',
    marginHorizontal: '23@s',
  },
  postAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '45@ms',
    height: '45@ms',
    borderRadius: width / 2,
  },
  title: {
    paddingLeft: '10@ms',
    letterSpacing: '0.48@ms',
    lineHeight: '15@ms',
  },
  postTitle: {
    height: '25@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '11@s',
  },
  leadTitle: {
    lineHeight: '15@ms',
  },
  heartIcon: {
    position: 'absolute',
    right: 0,
  },
  articleText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leadText: {
    lineHeight: '15@ms',
  },
  more: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  postTime: {
    lineHeight: '12@ms',
  },
});

const listHeader = ScaledSheet.create({
  poll: {
    height: '80@vs',
    marginHorizontal: '23@s',
    marginBottom: '18@vs',
    borderRadius: '10@ms',
    backgroundColor: theme.backgroundColor.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pollDescription: {
    marginLeft: '12@s',
    width: '60%',
  },
  iconPositioner: {
    width: '80@s',
    height: '58@vs',
    borderRadius: '20@ms',
    backgroundColor: theme.backgroundColor.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16@s',
    marginLeft: '16@s',
  },
  pollName: {
    lineHeight: '18@ms',
  },
  pollAccess: {
    lineHeight: '16@ms',
  },
});

export {item, listHeader};
