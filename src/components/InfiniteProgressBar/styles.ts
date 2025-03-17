import { StyleSheet } from 'react-native';

import colors from 'constants/colors';

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 6,
    backgroundColor: colors.translucentWhite,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: 150,
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
});

export default styles;