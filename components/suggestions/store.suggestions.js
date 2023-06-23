const Model     = require('./model.suggestions');

function add(suggestion){
    const newSuggestion = new Model(suggestion);
    const suggestionSaved = newSuggestion.save();
    return suggestionSaved;
}

async function list(filter){
    const suggestionsFound = await Model.find(filter);
    return suggestionsFound;
}

module.exports = { 
    add,list
}