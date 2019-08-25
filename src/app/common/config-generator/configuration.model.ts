import { Time } from '@angular/common';

export interface ConfigurationTemplate {
    name;
    days: {
        name: string;
        shortName: string;
    };
    periods: {
        name: string;
        shortName: string;
        startTime: Time;
        endTime: Time
    };
    subjects: {
        name: string;
        shortName: string;
        code: string;
    };
    rooms: {
        name: string;
        shortName: string;
        capacity: number;
        building: string;
    };
    teachers: {
        name: string;
        shortName: string;
        maxActivitiesInARow: number;
        maxGapsPerCycle: number;
        maxGapsOncePerDay: number;
        dayOff2TimesAWeek: boolean
    };
    classes: {
        name: string;
        shortName: string;
        maxAllowedDifference: number;
        startOn1stPeriod: boolean;
        noGapsAllowed: number
    };
    activities: {
        teacher: string;
        subject: string;
        class: string;
        activitiesPerCyle: number;
        desiredRoom: string;
        alternateRoom: string;
    };
}
