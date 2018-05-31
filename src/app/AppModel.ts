import { User } from './user/User';
import { Module } from './models/Module';
import { Complex } from './models/Complex';
import { ModuleDataSet } from './models/ModuleDataSet';
import { Warning } from './models/Warning';
import { Update } from './models/Update';

export class AppModel {
    constructor(public user: User,
                public modules: Module[],
                public complexes: Complex[],
                public moduleData: ModuleDataSet[],
                public quarter: number,
                public updates: Update[],
                public warnings: Warning[],
                public assistantResponse: string) {
    }
}
