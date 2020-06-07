import React, { useState, useEffect } from 'react';
export default () => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    useEffect(() => {
        get();
    }, []);
    const get = () => {
        fetch('/static/text.json', {
            method: 'GET',
            mode: 'cors',// 允许发送跨域请求
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                let one = data[Math.floor((Math.random() * data.length))];
                setText(one.text);
                setText2(one.console);
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
                    <p>{text2}</p>
                </div>
            </div>
        </div>

    )
}