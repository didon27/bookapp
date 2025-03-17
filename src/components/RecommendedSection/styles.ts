import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        paddingHorizontal: 16,
        color: colors.deepPurpleBlack,
    },
    listContent: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    itemTitle: {
        color: colors.darkGrey,
        opacity: 1
    },
});

export default styles;