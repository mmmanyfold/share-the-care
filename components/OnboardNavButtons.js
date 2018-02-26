import React from 'react';
import { Button } from 'react-native';

export const NextButton = (props) => (
    <Button
        {...props}
        onPress={ async () => {
            if (props.saveAction) {
                try {
                    const store = await props.saveAction();
                    props.navigation.navigate(props.to, {
                        store,
                    });
                    console.log(store); // debugging
                } catch (e) {
                    console.log(e);
                }
                return;
            }
            props.navigation.navigate(props.to);
        }}
        title="Next"
        color="#6FCF97"/>
);

export const BackButton = (props) => (
    <Button
        {...props}
        onPress={() => props.navigation.goBack()}
        title="Back"
        color="#BDBDBD"/>
)