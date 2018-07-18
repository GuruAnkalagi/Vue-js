import axios from 'axios';

export default {
	getdata(url, cb)
	{
	    return new Promise(function (resolve, reject) {
	    axios.get(url)
	      .then(response => {
	        resolve(response.data);
	      })
	      .catch(e => {
	        this.errors.push(e)
	      })
	    });
	},
	getlatlon(address, cb)
	{
		return new Promise(function (resolve, reject) {
	    axios.get('http://maps.googleapis.com/maps/api/geocode/json?address="'+address+'"&sensor=false')
	      .then(response => {
	      	resolve(response.data.results);
	      })
	      .catch(e => {
	        this.errors.push(e)
	      })
	    });
	},

	signuppost(value, url, cb)
	{
		return new Promise(function (resolve, reject) {
                axios.post(url, value, {
                        headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, text/plain, */*'
                  }
              })
            .then(function (res) {
                resolve(res);
            })
            .catch(function (err) {
                reject(err.response.data)
            })
        });
	},

	agencysetupstatus(url,cb)
	{
		return new Promise(function (resolve, reject) {
	    axios.get(url)
	      .then(response => {
	      	resolve(response.data);
	      })
	      .catch(e => {
	        this.errors.push(e)
	      })
	    });
	},

	agencystatusupdate(url,cb)
	{
		return new Promise(function (resolve, reject) {
            axios.put(url, {}, {
                        headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, text/plain, */*'
                  }
            })
            .then(function (res) {
                resolve(res);
            })
            .catch(function (err) {
                reject(err.response)
            })
        });
	}
}