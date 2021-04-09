'use strict'

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    get from() {
        return this._from;
    }
    set from(fromNew) {
        if (typeof fromNew !== 'number') {
            throw new TypeError('WRONG only number')
        }
        return this._from = fromNew;
    }
    get to() {
        return this._to;
    }
    set to(toNew) {
        if (typeof toNew !== 'number') {
            throw new TypeError('WRONG only number')
        }
        return this._to = toNew;
    }
    get range() {
        return [this.to,this.from]
    }
    getvalidate(val1) {
        if (val1 <= this._to && val1 >= this._from) {
            return val1;
        } else {
            throw new TypeError('Nothing this number!')
        }
    }
}

const b = new RangeValidator(10, 20);
console.log(b);
