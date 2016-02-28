exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
	async : function (value) {
		return new Promise(function (resolve) {
			resolve(value);
		});
	},

	manipulateRemoteData : function (url) {
		var promise = new Promise(function (resolve) {
			// Instantiates the XMLHttpRequest
			var client = new XMLHttpRequest();
			var uri = url;

			client.open("GET", uri);
			client.send();

			client.onload = function () {
				if (this.status >= 200 && this.status < 300) {
					var result = JSON.parse(this.response).people.sort(function(a,b) { return a.name.localeCompare(b.name);}).map(function(temp) { return temp.name;});
					resolve(result);
				} else {
					reject(this.statusText);
				}
			};
			client.onerror = function () {
				reject(this.statusText);
			};
		});
		return promise;
	}
};
