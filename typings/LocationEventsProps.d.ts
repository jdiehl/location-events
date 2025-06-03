/**
 * This file was generated from LocationEvents.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface LocationEventsProps<Style> {
    name: string;
    style: Style[];
    enabled: DynamicValue<boolean>;
    enableHighAccuracy: DynamicValue<boolean>;
    useSignificantChanges: DynamicValue<boolean>;
    distanceFilter: DynamicValue<Big>;
    latitude: EditableValue<string>;
    longitude: EditableValue<string>;
    timestamp?: EditableValue<Date>;
    altitude?: EditableValue<string>;
    accuracy?: EditableValue<string>;
    altitudeAccuracy?: EditableValue<string>;
    heading?: EditableValue<string>;
    speed?: EditableValue<string>;
}

export interface LocationEventsPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    enabled: string;
    enableHighAccuracy: string;
    useSignificantChanges: string;
    distanceFilter: string;
    latitude: string;
    longitude: string;
    timestamp: string;
    altitude: string;
    accuracy: string;
    altitudeAccuracy: string;
    heading: string;
    speed: string;
    onLocationChange: {} | null;
}
