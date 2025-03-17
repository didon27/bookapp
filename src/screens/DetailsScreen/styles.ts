import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollView: {
        flex: 1,
    },
    backButton: {
        marginTop: 20,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: colors.white,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: colors.paleGray,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Nunito-Medium',
        letterSpacing: -0.41,
        fontWeight: '700',
        color: colors.deepPurpleBlack,
    },
    statLabel: {
        fontSize: 12,
        color: colors.lightGray,
        letterSpacing: -0.41,
        fontFamily: 'Nunito-Medium',
    },
    readButton: {
        backgroundColor: colors.hotPink,
        borderRadius: 30,
        height: 48,
        marginHorizontal: 16,
        justifyContent: 'center',
        fontFamily: 'Nunito-Medium',
        alignItems: 'center',
        marginVertical: 24,
    },
    readButtonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'Nunito-Medium',
        fontWeight: '800',
    },
    slideImage: {
        width: '100%',
        height: 250,
        borderRadius: 8,
    },
    separator: {
        height: 1,
        backgroundColor: colors.paleGray,
        margin: 16
    }
});

export default styles;