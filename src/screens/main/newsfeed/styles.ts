import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

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

export {item};
