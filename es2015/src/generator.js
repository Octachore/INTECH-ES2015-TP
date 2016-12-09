import 'babel-polyfill';

/**
 * Même exercice que pour iterator
 * Mais en utilisant un generator
 */
export function toIterable(obj) {
    let keys = Object.keys(obj)
    obj[Symbol.iterator] = function* () {
        for(const key of keys) {
            yield { key: key, value: obj[key] }
        }
    }
}

/**
 * exécuter toutes les fonctions et retourner les resultats
 * sous forme d'iterator grâce au mot clé yield
 */
export function *sequence(...funcs) {
    for(const f of funcs) {
        yield f()
    }
}

/**
 * Emet des valeur à lors de l'appel de la methode emit à l'aide d'un generator
 */
export class Emitter {
    /**
     * le receiver est une fonction sera appellé à chaque fois qu'une nouvelle est émise
     */
    constructor(receiver) {
        this.emit = (val) => receiver(val)
    }
}