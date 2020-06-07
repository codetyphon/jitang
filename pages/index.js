import React, { useState, useEffect } from 'react';
export default () => {
    const [text, setText] = useState('');
    const [console, setConsole] = useState('');
    useEffect(() => {
        get();
    }, []);
    const get = () => {
        fetch('/api', {
            method: 'GET',
            mode: 'cors',// 允许发送跨域请求
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (one) {
                setText(one.text);
                setConsole(one.console);
            })
        }).catch(function (e) {
            console.log('error: ' + e.toString());
        })
    }
    return (
        <div className="flex-center position-ref full-height">
            <div className="content" onClick={get}>
                <div className="title m-b-md">
                    <h2>{text}</h2>
                    <p>{console}</p>
                </div>
            </div>
        </div>

    )
}