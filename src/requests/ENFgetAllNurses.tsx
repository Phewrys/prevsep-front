import React from 'react'
var axios = require('axios')
var qs = require('qs')

// GET: /api/v1/nurses - Returns all nurses in the database.
function getAllNurses() {
    const token = localStorage.getItem('@PermissionPS:token');

    var data = qs.stringify({
        'grant_type': 'client_credentials'
    });
    
    var config = {
        method: 'get',
        url: 'https://prevsep.herokuapp.com/api/v1/nurses',
        headers: {
            'accept': 'application/json',
            'Authorization': "Bearer " + `${token}`,
        },
        data: data
    };

    axios(config)
        .then(function (response: any) {
            console.log(response.data)
        })
        .catch(function (error: any) {
            console.log(error);
        });
}

const ENFgetAllNurses: React.FC = () => {

    return (
        <p onClick={() => getAllNurses()}>RETORNA TODAS AS ENFERMEIRAS</p>
    )
}

export default ENFgetAllNurses