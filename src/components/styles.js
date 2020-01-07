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
    }
}

export const dividerStyles = {
    divider: {
        backgroundColor: lightOffBlack,
        height: 0.25,
    }
}