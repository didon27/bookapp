import { StyleSheet } from "react-native";

import { DEVICE_WIDTH } from "constants/sizes";
import colors from "constants/colors";

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: '100%',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    slideContainer: {
        width: DEVICE_WIDTH,
        height: 180,
    },
    slideImage: {
        width: DEVICE_WIDTH - 32,
        height: 180,
        borderRadius: 8,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.steelGray,
        borderRadius: 8,
        opacity: 0.3,
    },
    dotStyle: {
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: colors.deepMagenta,
    },
    inactiveDotStyle: {
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: colors.coolGray,
    },
    paginationContainerStyle: {
        paddingVertical: 0,
        marginTop: -25,
        marginBottom: 15
    }
});

export default styles;