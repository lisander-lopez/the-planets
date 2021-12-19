import { BlockContentProps } from "@sanity/block-content-to-react";

export interface Planet {
    planetName: string;
    averageTemperature: Temperature;
    keyPoints: KeyPoint[];
    radius: Distance;
    revolutionTime: TimeUnit;
    rotationTime: TimeUnit;
    slug: Slug;
}

export interface Temperature {
    temperatureFormatted: string;
    temperatureUnit: string;
    temperature: number;
}

export interface Distance {
    distanceFormatted: string;
    distanceUnit: string;
    distanceValue: number;
}

export interface TimeUnit {
    timeFormatted: string;
    timeUnit: string;
    timeValue: number;
}

export interface Slug {
    current: string;
}

export interface KeyPoint {
    keyPointText: BlockContentProps;
    keyPointTitle: string;
    sourceName: string;
    sourceURL: string;
}