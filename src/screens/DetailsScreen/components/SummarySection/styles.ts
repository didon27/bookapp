import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    title: {
        fontFamily: 'Nunito-Medium',
        fontSize: 20,
        fontWeight: '700',
        color: colors.deepPurpleBlack,
        lineHeight: 22,
        marginBottom: 8,
    },
    summaryText: {
        fontFamily: 'Nunito-Medium',
        fontSize: 14,
        letterSpacing: 0.15,
        lineHeight: 22,
        color: colors.darkGrey,
    },
});

export default styles;