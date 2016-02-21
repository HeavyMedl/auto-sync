'use strict';
const RemoteSync = require('remote-sync');
const watch = require('watch');

class AutoSync extends RemoteSync {
	constructor(rs_options, a_options) {
		super(rs_options);
		this.a_options = a_options
	}
	speak() {
		console.log(`${JSON.stringify(this.options)}`);
	}
}
module.exports = AutoSync;

const client = new AutoSync(
	{
		user : 'anonymous',
		pw : 'k@m.com',
		host : 'ftp.sec.gov',
		operations : [
			{
				operation : 'list',
				command : 'nlist'
			}
		]
	}
);
client.perform();