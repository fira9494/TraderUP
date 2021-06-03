import React, { useState } from 'react';
import { ExchangeRates } from "../../components/common/ExchangeRates";
import { UiButton } from "../../components/ui/UiButton";
import './MainPage.css'

export function MainPage(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className='main-page_container'>
            <UiButton type='primary' onClick={() => setIsModalVisible(true)}>Exchange</UiButton>
            <ExchangeRates setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
        </div>
    );
}

