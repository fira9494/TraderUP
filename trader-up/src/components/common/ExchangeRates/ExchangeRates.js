import React, { useEffect, useState } from 'react'
import { Modal, Tabs } from "antd";
import { UiInput } from "../../ui/UiInput";
import { UiButton } from "../../ui/UiButton";
import { SyncOutlined } from '@ant-design/icons';
import './ExchangeRates.css'
import {API_KEY, API_URL, PROXY_URL} from "../../../utils/constants";

export function ExchangeRates({isModalVisible, setIsModalVisible}) {
    const [input, setInput] = useState(0)
    const [key, setKey] = useState('RUB')
    const [secondKey, setSecondKey] = useState('RUB')

    const { TabPane } = Tabs;


    const [rates, setRates] = useState(null)


    useEffect(() => {
        fetch(`${PROXY_URL}${API_URL}${API_KEY}`, {
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(res => setRates(res.data))
        const interval = setInterval(() => {
            fetch(`${PROXY_URL}${API_URL}${API_KEY}`, {
                headers: {'Content-Type': 'application/json'},
            })
                .then(res => res.json())
                .then(res => setRates(res.data))
        }, 15000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <Modal
                title='Exchange Rates'
                centered
                footer={null}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                width={1000}
            >
                <div className='modal_container'>
                    <div className='left'>
                        <Tabs activeKey={key} onChange={(key) => setKey(key)}>
                            <TabPane tab="RUB" key="RUB">
                                <UiInput
                                    onChange={(e) => setInput(e.target.value)}
                                    value={input}
                                />
                            </TabPane>
                            <TabPane tab="USD" key="USD">
                                <UiInput
                                    onChange={(e) => setInput(e.target.value)}
                                    value={input}
                                />
                            </TabPane>
                            <TabPane tab="EUR" key="EUR">
                                <UiInput
                                    onChange={(e) => setInput(e.target.value)}
                                    value={input}
                                />
                            </TabPane>

                        </Tabs>
                    </div>
                    <UiButton
                        onClick={() => {
                            setSecondKey(key);
                            setKey(secondKey)
                        }}
                        type='primary'
                        style={{marginTop: '15%'}}
                    ><SyncOutlined spin/></UiButton>
                    <div className='right'>
                        <Tabs activeKey={secondKey} onChange={(key) => setSecondKey(key)}>
                            {rates && <><TabPane tab="RUB" key="RUB">
                                <div
                                    className='rates-value'>{key === secondKey ? input : (input * rates[`${key}${secondKey}`]).toFixed(2)}</div>
                            </TabPane>
                                <TabPane tab="USD" key="USD">
                                    <div
                                        className='rates-value'>{key === secondKey ? input : (input * rates[`${key}${secondKey}`]).toFixed(2)}</div>
                                </TabPane>
                                <TabPane tab="EUR" key="EUR">
                                    <div
                                        className='rates-value'>{key === secondKey ? input : (input * rates[`${key}${secondKey}`]).toFixed(2)}</div>
                                </TabPane> </>}
                        </Tabs>
                    </div>
                </div>
            </Modal>
        </>
    )
}



