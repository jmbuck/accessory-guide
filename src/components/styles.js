import { offWhite, primary, accent, offBlack, lightOffBlack } from '../colors'

// TopHeader
export const headerStyles = {
    background: {
        backgroundColor: primary,
    },
    text: {
        color: offWhite,
    }
}

// GenerateForm
// TODO: Get line to show up under last section inputs
export const formStyles = {
    submitButton: {
        paddingTop: 50
    },
    text: {
        color: offBlack,
    },
    sectionHeader: {
        marginTop: 15,
        fontSize: 16,
        width: 70,
        color: offBlack,
    },
    formSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 80,
        marginBottom: 10,
    },
    textField: {
        width: 80,
    },
}

export const exerciseListStyles = {
    listHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    listItem: {
        flex: 2,
        justifyContent: 'space-evenly',
    },
    exerciseName: {
        flex: 1,
        paddingTop: 5,
        fontSize: 16,
    },
    exerciseInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    exerciseInfoText: {
        fontSize: 12,
        marginRight: 10,
    }
}

export const dividerStyles = {
    divider: {
        backgroundColor: lightOffBlack,
        height: 0.25,
    },
    thickDivider: {
        backgroundColor: lightOffBlack,
        height: 0.75,
    }
}