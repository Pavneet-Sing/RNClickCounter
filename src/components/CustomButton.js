/**
 * @author Pavneet Singh
 */

import React from "react";
import {
    Button,
    View
} from 'react-native';

export default function (props) {
    return (
        <View style={props.style}>
            <Button
                onPress={props.onPress}
                title={props.title} />
        </View>
    )
}