export function UniqueKey(StringToSplit,Index){
    let str = StringToSplit
    let matches = str.match(/\b(\w)/g); 
    let acronym = matches.join(''); 
    let Key = acronym + Index
    return Key
}