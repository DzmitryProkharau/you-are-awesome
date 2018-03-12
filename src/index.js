// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
	//
};
const createNotEnumerableProperty = function(prop) {
    Object.defineProperty(Object.prototype, prop, {
        enumerable:false,
        value:'value'
    });
    return prop;	
};
const createProtoMagicObject = () => {
	return Function;
};

var count = 0;
const incrementor = () => {
	Object.__proto__.valueOf = function () {
		return count;
	}
	count++;
	return incrementor;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (arg) => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arg);
		}, 1000);
	});
	return promise;
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
	return null;
};
const toBuffer = () => {};//?
const sortByProto = (arr) => {
	return arr.sort(function (a, b) {
		return a - b;
	});
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
