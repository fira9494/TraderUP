import React from 'react';
import { ExchangeRates } from "../../components/common/ExchangeRates";
import {UiButton} from "../../components/ui/UiButton";

export function MainPage(props) {
    return (
        <div>
            <UiButton/>
            <ExchangeRates/>
        </div>
    );
}

