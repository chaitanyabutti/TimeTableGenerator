import { Time } from '@angular/common';

// export interface Subjects {
//     name: string;
//     shortName: string;
//     code: string;
// }

export class Subjects {
    name: string;
    shortName: string;
    code: string;
}

export class Days {
            name: string;
            shortName: string;
}
export class Periods {
            name: string;
            shortName: string;
            startTime: Time;
            endTime: Time;
}
export class Rooms {
            name: string;
            shortName: string;
            capacity: number;
            building: string;
}

export class Teachers {
            name: string;
            shortName: string;
            maxActivitiesInARow: number;
            maxGapsPerCycle: number;
            maxGapsOncePerDay: number;
            dayOff2TimesAWeek: boolean;
}

export class Classes {
            name: string;
            shortName: string;
            maxAllowedDifference: number;
            startOn1stPeriod: boolean;
            noGapsAllowed: number;
}
export class Activities {
            teacher: string;
            subject: string;
            class: string;
            activitiesPerCyle: number;
            desiredRoom: string;
            alternateRoom: string;
}

export class ConfigurationTemplate {
    Days: Days[];
    Periods: Periods[];
    Subjects: Subjects[];
    Rooms: Rooms[];
    Teachers: Teachers[];
    Classes: Classes[];
    Activities: Activities[];
}

// export class ConfigurationTemplate {
    // constructor(    name: string,
    //                 days: {
    //         name: string;
    //         shortName: string;
    //     },
    //                 periods: {
    //         name: string;
    //         shortName: string;
    //         startTime: Time;
    //         endTime: Time
    //     },
    //                 subjects: {
    //         name: string;
    //         shortName: string;
    //         code: string;
    //     },
    //                 rooms: {
    //         name: string;
    //         shortName: string;
    //         capacity: number;
    //         building: string;
    //     },
    //                 teachers: {
    //         name: string;
    //         shortName: string;
    //         maxActivitiesInARow: number;
    //         maxGapsPerCycle: number;
    //         maxGapsOncePerDay: number;
    //         dayOff2TimesAWeek: boolean
    //     },
    //                 classes: {
    //         name: string;
    //         shortName: string;
    //         maxAllowedDifference: number;
    //         startOn1stPeriod: boolean;
    //         noGapsAllowed: number
    //     },
    //                 activities: {
    //         teacher: string;
    //         subject: string;
    //         class: string;
    //         activitiesPerCyle: number;
    //         desiredRoom: string;
    //         alternateRoom: string;
    //     }
    //     ) {

    //     }
//         name: string;
//     days: [{
//         name: string,
//         shortName: string,
//     }];
// periods: [{
//         name: string;
//         shortName: string;
//         startTime: Time;
//         endTime: Time;
//     }];
// subjects: [{
//         name: string;
//         shortName: string;
//         code: string;
//     }];
// rooms: [{
//         name: string;
//         shortName: string;
//         capacity: number;
//         building: string;
//     }];
// teachers: [{
//         name: string;
//         shortName: string;
//         maxActivitiesInARow: number;
//         maxGapsPerCycle: number;
//         maxGapsOncePerDay: number;
//         dayOff2TimesAWeek: boolean;
//     }];
// classes: [{
//         name: string;
//         shortName: string;
//         maxAllowedDifference: number;
//         startOn1stPeriod: boolean;
//         noGapsAllowed: number;
//     }];
// activities: [{
//         teacher: string;
//         subject: string;
//         class: string;
//         activitiesPerCyle: number;
//         desiredRoom: string;
//         alternateRoom: string;
//     }];

//     name: string;
//     days: [{
//         name: string,
//         shortName: string,
//     }];
// periods: {
//         name: string;
//         shortName: string;
//         startTime: Time;
//         endTime: Time;
//     }
// subjects: {
//         name: string;
//         shortName: string;
//         code: string;
//     }
// rooms: {
//         name: string;
//         shortName: string;
//         capacity: number;
//         building: string;
//     }
// teachers: {
//         name: string;
//         shortName: string;
//         maxActivitiesInARow: number;
//         maxGapsPerCycle: number;
//         maxGapsOncePerDay: number;
//         dayOff2TimesAWeek: boolean;
//     }
// classes: {
//         name: string;
//         shortName: string;
//         maxAllowedDifference: number;
//         startOn1stPeriod: boolean;
//         noGapsAllowed: number;
//     }
// activities: {
//         teacher: string;
//         subject: string;
//         class: string;
//         activitiesPerCyle: number;
//         desiredRoom: string;
//         alternateRoom: string;
//     }
// }

