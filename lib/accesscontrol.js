/* 
    accesscontrol.js
    mongodb-rest

    Created by Benjamin Eidelman on 2011-04-05.
		This file is part of mongodb-rest.
*/ 
//var mongo = require("mongodb"),
//    config = module.parent.exports.config;

app = module.parent.exports.app; // ana

/*
 * accesscontrol - handles http access control based on configuration
 */
module.exports.handle = function(req, res, next) {
	console.log('Access Control Handler');
	if (req.header('Origin')) {
		if (app.get("accessControl").allowOrigin) {
			console.log('Allow-Origin');
			res.header('Access-Control-Allow-Origin', app.get("accessControl").allowOrigin);
		}
		if (app.get("accessControl").allowMethods) {
			res.header('Access-Control-Allow-Methods', app.get("accessControl").allowMethods);
		}
		if (req.header('Access-Control-Request-Headers')) {
			res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
		}
	}
	return next();	
};
