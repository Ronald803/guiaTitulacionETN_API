const storeSuggestion = require('./store.suggestions');

function addSuggestion(suggestion,autor){
    return new Promise( async(resolve,reject)=>{
        const newSuggestion = {
            suggestion,
            autor,
            date: new Date()
        }
        const suggestionSaved = await storeSuggestion.add(newSuggestion);
        resolve(suggestionSaved)
    })
}

function getSuggestions(filter){
    return new Promise(async(resolve,reject)=>{
        const suggestions = await storeSuggestion.list(filter);
        resolve(suggestions)
    })
}

module.exports = {
    addSuggestion,getSuggestions
}