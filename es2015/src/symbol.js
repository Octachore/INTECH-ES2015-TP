/**
 * Utiliser un symbol pour rendre privée une propriété qui devra être exploitée
 * par le getter et le setter 'value'
 */
export class ClassWithPrivateProperty {
    constructor() {
    }

    /**
     * Getter permettant d'accéder à la variable privée
     */
    get value() {
        return this[_value]
    }

    /**
     * Setter permettant de modifier la variable privée
     */
    set value(val) {
        this[_value] = val
    }
}

const _value = Symbol('value')