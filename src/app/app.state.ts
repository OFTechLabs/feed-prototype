import { Action, State, StateContext } from '@ngxs/store';
import { AppModel } from './AppModel';
import { AssetmanagementAppModelFactory } from './AssetmanagementAppModelFactory';
import { ChangeUser, UpdateFeedAssistanceResponse } from './app.action';
import { User } from './user/User';

@State<AppModel>({
    name: 'app',
    defaults: AssetmanagementAppModelFactory.create()
})
export class AppState {

    constructor() {
    }

    @Action(UpdateFeedAssistanceResponse)
    updateAssistanceResponse({getState, setState}: StateContext<AppModel>, action: UpdateFeedAssistanceResponse) {
        const currentState = getState();
        const newAssistanceResponse: string = action.assistanceResponse;
        const newAppModel: AppModel = new AppModel(
            currentState.user,
            currentState.modules,
            currentState.complexes,
            currentState.moduleData,
            currentState.quarter,
            currentState.updates,
            currentState.warnings,
            newAssistanceResponse
        );

        setState(newAppModel);
    }

    @Action(ChangeUser)
    changeUser({getState, setState}: StateContext<AppModel>, action: ChangeUser) {
        const currentState = getState();

        const newUser: User = new User('Henk', 'Hacker', action.roleNames);

        const newAppModel: AppModel = new AppModel(
            newUser,
            currentState.modules,
            currentState.complexes,
            currentState.moduleData,
            currentState.quarter,
            currentState.updates,
            currentState.warnings,
            currentState.assistantResponse
        );

        setState(newAppModel);
    }
}
