import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: 'Nunito-Medium',
    color: colors.white,
    marginBottom: 12,
    marginLeft: 16,
  },
  listContent: {
    paddingHorizontal: 12,
  },
});

export default styles;