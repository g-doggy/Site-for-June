function Tuple(f, s) {
	this.f = f;
	this.s = s;
}

Tuple.prototype.setData = function(f, s) {
	this.f = f;
	this.s = s;
}
Tuple.prototype.getS = function() {
	return this.s;
}
Tuple.prototype.getF = function() {
	return this.f;
}

function meetingsTime(arr) {
	arr.sort(function(a, b) {
		if (a.f < b.f) return -1;
		else if (a.f == b.f) return 0;
		else return 1;
	});
	for (var j = 0; j < arr.length - 1; j++) {
		if (arr[j] == undefined) continue;
		for (var i = j + 1; i < arr.length; i++) {
			if (arr[i] == undefined) continue;
			if (arr[j].s >= arr[i].f) {
				if (arr[j].s > arr[i].s) {}
				else arr[j].s = arr[i].s;
				arr.splice(i, 1);
			}
		}
	}
	return arr;
}

var t1 = new Tuple(0, 1);
var t2 = new Tuple(3, 5);
var t3 = new Tuple(4, 8);
var t4 = new Tuple(10, 12);
var t5 = new Tuple(9, 10);
var kek = [t1, t2, t3, t4, t5];
console.log('Length of array (1): ' + kek.length);
console.log(meetingsTime(kek));