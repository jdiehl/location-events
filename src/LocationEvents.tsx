import { createElement, useEffect } from "react";
import { ViewStyle } from "react-native";

import Geolocation from "@react-native-community/geolocation";

import { LocationEventsProps } from "../typings/LocationEventsProps";

export function LocationEvents(p: LocationEventsProps<ViewStyle>): null {
    useEffect(() => {
        if (!p.longitude || !p.enabled.value) return
        const watchId = Geolocation.watchPosition(
            position => {
                console.info('UPDATE');
                if (p.timestamp) p.timestamp.setValue(new Date(position.timestamp));
                if (p.altitude) p.altitude.setValue(String(position.coords.altitude));
                if (p.accuracy) p.accuracy.setValue(String(position.coords.accuracy));
                if (p.altitudeAccuracy) p.altitudeAccuracy.setValue(String(position.coords.altitudeAccuracy));
                if (p.heading) p.heading.setValue(String(position.coords.heading));
                if (p.speed) p.speed.setValue(String(position.coords.speed));
                if (p.latitude) p.latitude.setValue(String(position.coords.latitude));
                if (p.longitude) p.longitude.setValue(String(position.coords.longitude));
            },
            error => {
                console.error("Error watching position:", error);
            },
            {
                enableHighAccuracy: p.enableHighAccuracy.value,
                distanceFilter: p.distanceFilter.value?.toNumber(),
                useSignificantChanges: p.useSignificantChanges.value
            }
        );
        return () => {
            Geolocation.clearWatch(watchId);
        };
    }, [p.longitude, p.enabled, p.enableHighAccuracy, p.distanceFilter, p.useSignificantChanges]);
    return null;
}
