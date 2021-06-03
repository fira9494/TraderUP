import React from 'react';
import { Input }  from "antd";

export function UiInput(props) {
    return (
        <>
            <Input {...props}
                type='number'
                style={{height: '200px', fontSize: '40px'}}
            />
        </>
    );
}

