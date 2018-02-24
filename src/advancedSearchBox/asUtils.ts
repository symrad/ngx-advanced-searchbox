export class AsUtils{
    static getCurrentCaretPosition(input):number {
        if (!input) {
            return 0;
        }

        try {
            // Firefox & co
            if (typeof input.selectionStart === 'number') {
                return input.selectionDirection === 'backward' ? input.selectionStart : input.selectionEnd;

            } else if ((<any>document).selection) { // IE
                input.focus();
                const selection = (<any>document).selection.createRange();
                const selectionLength = (<any>document).selection.createRange().text.length;
                selection.moveStart('character', -input.value.length);
                return selection.text.length - selectionLength;
            }
        }catch (err) {
            // selectionStart is not supported by HTML 5 input type, so jut ignore it
        }
        return 0;
    };

    static setCaretPosition(input,pos){
        if (!input) {
            return;
        }
        var range;
        try {
            // Firefox & co
            if (input.setSelectionRange) {
                input.focus();
                input.setSelectionRange(pos,pos);
            } else if (input.createTextRange) { // IE
                input.focus();
                range = input.createTextRange();
                range.move('character', pos);
                range.select();
            }
        }catch (err) {
            // selectionStart is not supported by HTML 5 input type, so jut ignore it
        }
    }

    static getterSetterModelTree(parent, models, typeLastModel?) {
        if (models.length === 0) {
            return parent;
        }
        const firstModel = models[0];
        if (!parent[firstModel]) {
            if(typeLastModel){
                if (models.length === 1) {
                    parent[firstModel] = typeLastModel;
                    return parent[firstModel];
                }
                parent[firstModel] = {};
            }else{
                return false;
            }
        }
        models.shift();
        return this.getterSetterModelTree(parent[firstModel], models, typeLastModel);
    }
}