import {AppModel} from './AppModel';

export class AppAuthorizationUtil {

    public static hasModule(model: AppModel, shouldHaveModule: string) {
        return model.modules
            .filter(module => module.name === shouldHaveModule)
            .length > 0;
    }

    public static hasRole(model: AppModel, shouldHaveRole: string) {
        return model.user.roles
            .filter(role => role === shouldHaveRole)
            .length > 0;
    }
}
