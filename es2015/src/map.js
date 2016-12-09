
/**
 * La classe TextIndexer permet d'indexer du text via la méthode indexText
 *
 */
export class TextIndexer {
    constructor() {
        this.map = new Map();
    }

    /**
     * Permet d'indexer du texte. Chaque mot doit être rangé dans un Map.
     * Le map doit contenir tous les mots rencotrés associé au nombre de fois que le mot à été rencontré dans le texte.
     * Les fonctions String.split() et String.replace vous serons utiles !
     * @param text Le texte source à indexer
     */
    indexText(text) {
        const words = text.split(/[\s,;.]+/)
        const map = this.map
        words.forEach(w => {
            var lower = w.toLowerCase()
            if(map.get(lower) === undefined) {
                map.set(lower, 1)
            } else {
                map.set(lower, map.get(lower) + 1)
            }
        })
    }

    /**
     * Le poids d'un mot correspond au nombre de fois qu'il à été rencontré dans le texte.
     */
    getWeight(word) {
        return this.map.get(word.toLowerCase())
    }

    /**
     * retourne le nombre de mots indexés
     */
    get count(){
        return this.map.length
    }
}

