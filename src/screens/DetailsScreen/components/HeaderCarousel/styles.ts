import { StyleSheet } from "react-native";

import colors from "constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40,
        justifyContent: 'center',
    },
    slide: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
    },
    bookTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.white,
        textAlign: 'center',
        marginTop: 16,
    },
    bookAuthor: {
        fontSize: 14,
        color: colors.lightGray,
        textAlign: 'center',
        marginTop: 4,
    },
    backButton: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 16
    },
});

export default styles;
