import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
    carouselContainer: {
        marginBottom: 40
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.background
    },
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerTitle: {
        fontFamily: 'Nunito-Medium',
        fontSize: 22,
        lineHeight: 22,
        fontWeight: '700',
        color: colors.deepMagenta,
        paddingTop: 18,
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    scrollView: {
        flex: 1,
        paddingTop: 20,
    },
    bottomPadding: {
        height: 30,
    },
    slideImage: {
        width: '100%',
        height: 160,
        borderRadius: 8,
    },
});

export default styles;