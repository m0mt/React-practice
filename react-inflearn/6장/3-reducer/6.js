function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case STE_SELECTED_PEOPLE:
                // draft.selectedPeolple = draft.peopleList.find(
                //     item => item.id === action.id,
                // );
                draft.selectedPeople = action.id;
                break;
            case EDIT_PEOPLE_NAME: 
                const people = draft.peopleList.find(item => item.id === action.id);
                people.name = action.name;
                break;
            //...
        }
    });
}