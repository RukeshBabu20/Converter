import { FromPoint, MeasureType } from "../types";

const time = 60;
const distance = 1000;
const temperature = (273.15) * 1.8 + 32;

const AllMeasureStore: Record<MeasureType, Record<string, FromPoint>> = {
    "Temperature": {
        "Fahrenheit": { measure: "Fahrenheit" },
        "Kelvin": { measure: "Kelvin"}
    },
    "Area": {
        "Meter": { measure: "Meter" },
        "KiloMeter": { measure: "KiloMeter" }
    },
    "Time": {
        "Minute": { measure: "Minute" },
        "Hour": { measure: "Hour"}
    }

}

export function allMeasures(): MeasureType [] {
    return Object.keys(AllMeasureStore) as MeasureType[];
}

export function allPoints(measure: MeasureType): FromPoint[] {
    return Object.values(AllMeasureStore[measure]);
}

export function totalValue(measure:MeasureType, from: string, to: string, inputValue: number){

    if(!measure) return 0;
    if(!from) return 0;
    if(!to) return 0;
    if(!inputValue) return 0;

    if(measure == "Time")
    {
        if(from == "Hour") return inputValue * time;   
        else return inputValue / time;  
    }
    else if(measure == "Temperature")
    {
        if(from == "Kelvin") return (inputValue-273.15)* 9/2 +32;
        else return ((inputValue-32)* 9/2) + 273.15; 
    }
    else if(measure == "Area")
    {
        if(from == "Meter") return inputValue / distance;
        else return inputValue * distance;
    }
}