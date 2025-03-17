import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 52,
    fontWeight: '700',
    color: colors.hotPink,
    fontFamily: 'Georgia-Italic',
    lineHeight: 52,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 24,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Nunito-Medium',
    opacity: 0.8,
    marginBottom: 50,
  },
  progressContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default styles;