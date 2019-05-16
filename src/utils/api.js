import axios from 'axios';

module.exports={
    fetchData : function () {
        let url = window.encodeURI("uri");

        return axios.get(url).then((response)=>{
            return response.data;
        })
    }
};