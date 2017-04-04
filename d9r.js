
function isObject(x) {
	var type = typeof x;
	return x !== null && ( type === 'object' || type === 'function' );
}

function isString(path) {
	return typeof path === 'string';
}


class d9r /* dot iterator */ {

	dotEach (obj, path, callback){
		if (!isObject(obj) || typeof path !== 'string') return;
		var pathArr = path.split('.'),
			_obj = obj;
		for (var i = 0, p; i < pathArr.length; i++) {
			p = pathArr[i];
			obj = callback(obj, p, i, pathArr);
			if( obj === 'break') break;
		}
		return _obj;
	};

	set (obj, path, value){
		return this.dotEach(obj, path, function(o, path, idx, paths){
			if (!isObject(o[path])) o[path] = {};
			if (idx === paths.length - 1){
				o[path] = value;
			} 
			return o[path];
		});
	}

	get (obj, path){
		var value;
		this.dotEach(obj, path, function(o, path, idx, paths){
			if(idx === paths.length -2 ){
				value = o[path][paths[idx+1]];
				return 'break';
			}
		});
		return value;
	}

	delete (obj, path){
		return this.dotEach(obj, path, function(o, path, idx, paths){
			if (idx === paths.length - 1) {
				delete o[path];
				return;
			}
			return o[path];
		});
	}

	has (obj, path){
		var found;
		this.dotEach(obj, path, function(o, path, idx, paths){
			if(!o) return 'break';
			found = o.hasOwnProperty(path) ? true : false;
			return o[path];
		});
		return found;
	}
}