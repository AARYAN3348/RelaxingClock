const axios = require('axios');

exports.handler = async function (event, context) {
    const ip = event.headers['client-ip'];

    if (event.httpMethod === 'GET') {
        try {
            const received = Date.now();
            const res = (await axios.get('https://ipapi.co/' + ip + '/json/')).data;

            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    unixtime: Math.floor(Date.now()),
                    timezone: res.timezone ?? null,
                    compleated: Date.now() - received,
                })
            }

        } catch (err) {
            return err;
        }
    } else {
        return {
            statusCode: 405,
            body: 'Method not supported'
        }
    }
}
