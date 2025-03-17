import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
    container: {
        margin: 4,
        width: 120,
        borderRadius: 8,
        overflow: 'hidden',
    },
    coverImage: {
        width: 120,
        height: 150,
        borderRadius: 8,
    },
    infoContainer: {
        padding: 8,
        justifyContent: 'space-between',
    },
    title: {
        marginTop: 4,
        opacity: 0.7,
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
        fontFamily: 'Nunito-Medium',
        letterSpacing: -0.41,
        color: colors.white,
    },
});

export default styles;