const fetch = require('node-fetch');

async function init() {
    // const resp = await fetch('http://localhost:5000', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify({name: 'Rita'})
    // });
    // const text = await resp.text();
    // console.log(text);

    const eventSource = new EventSource('users');

}

init();