export default (state, action) => {
    switch (action.type) {
        case "USER_SLIDER":
            return {
                ...state,
                users: {
                    ammount: action.value,
                    price: 4000 * action.value,
                },
            }
        case "BRANCH_SLIDER":
            return {
                ...state,
                branches: {
                    ammount: action.value,
                    price: 24000 * action.value,
                },
            }
        case "ADD_FEATURES":
            const newFeature = {
                type: action.title,
                price: action.price,
                noOfAdditionalFeature: action.noOfAdditionalFeature,
                additionalFeaturePrice: action.additionalFeaturePrice,
                included: action.included
            }

            return {
                ...state,
                applications: state.applications.concat(newFeature),
            }
        case "REMOVE_FEATURES":
            return {
                ...state,
                applications: state.applications.filter(app => app.type !== action.title )
            }
        case "ADD_ADDITIONAL_FEATURES":
            return {
                ...state,
                applications: state.applications.map(app => (
                    app.type === action.title ? {
                        ...app,
                        noOfAdditionalFeature: app.noOfAdditionalFeature+1,
                        additionalFeaturePrice: app.additionalFeaturePrice + Number(action.price.replace(',',''))
                    } : app
                ))
            }
        case "REMOVE_ADDITIONAL_FEATURES":
            return {
                ...state,
                applications: state.applications.map(app => (
                    app.type === action.title ? {
                        ...app,
                        noOfAdditionalFeature: app.noOfAdditionalFeature - 1,
                        additionalFeaturePrice: app.additionalFeaturePrice - Number(action.price.replace(',',''))
                    } : app
                ))
            }
        default:
            return state
    }
}
