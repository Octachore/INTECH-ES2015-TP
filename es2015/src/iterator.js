export class Iterable {
    constructor(iteratorFactory) {
        this.iteratorFactory = iteratorFactory
    }
}

export class Iterator {
    constructor(onNext) {
        this.next = function () {
            const value = onNext()
            return new IteratorResult(value, value === undefined)
        }
    }
}

export class IteratorResult {
    constructor(value, done) {
        this.value = value
        this.done = done
    }
}

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */
export function toIterable(obj) {
    let values = Object.keys(obj)
    let i = 0;
    let iterator = new Iterator(() => {
        if (i < values.length) {
            return values[i++];
        }
    });
    obj[Symbol.iterator] = () => iterator
}