'use strict';

const machoEntitlements = require('./');
try {
	const ent = machoEntitlements.parseFile(process.argv[2]);
	if (ent !== null) {
		console.log(ent.toString());
	} else {
		console.error('Cannot find any entitlement here');
	}
} catch (e) {
	console.error('Usage: node test.js [machoWithEntitlements]');
}
