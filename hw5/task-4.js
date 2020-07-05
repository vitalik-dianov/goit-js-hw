class StringBuilder {
    constructor(string){
        this._value = string;
    }

    get value() {
       return this._value
    }

    append(symbol){
        const arraySymbols = this._value.split('');
        arraySymbols.push(symbol);
        this._value = arraySymbols.join('')
    }
    prepend(symbol){
        const arraySymbols = this._value.split('');
        arraySymbols.unshift(symbol)
        this._value = arraySymbols.join('')
    }
    pad(symbol){
        const arraySymbols = this._value.split('');
        arraySymbols.push(symbol);
        arraySymbols.unshift(symbol)
        this._value = arraySymbols.join('')
    }
}



// ------------------------------------------------------
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='