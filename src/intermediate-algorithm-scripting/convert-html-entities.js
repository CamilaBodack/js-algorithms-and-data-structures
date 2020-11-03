/*
Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/


function convertHTML(str) {
    let key
    let replaceEntity
    const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": "&apos;"
    }

    for (key in entities) {
        replaceEntity = new RegExp(key, 'g')
        str = str.replace(replaceEntity, entities[key])
    }
    return str
}
convertHTML("Dolce & Gabbana")
convertHTML("<>")
