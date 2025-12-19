const findReplaceString = function (S, indexes, sources, targets) {
    const result = S.split('');

    for (let i = 0; i < indexes.length; i++) {
        let indexInS = indexes[i]
        const sourceChars = sources[i];
        const targetChars = targets[i];

        if (S.slice(indexInS, indexInS + sourceChars.length) === sourceChars) {

            result[indexInS] = [targetChars];
            let elementsToReplace = sourceChars.length - 1;
            while (elementsToReplace--) {
                result[++indexInS] = '';
            }
        }
    }
    return result.join('');
};