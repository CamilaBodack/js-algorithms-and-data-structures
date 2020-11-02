/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    let newArr = []

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('AT')) {
            newArr.push(["A", "T"])
            newArr.push(["T", "A"])
        } else {
            if (str[i].includes('TA')) {
                newArr.push(["T", "A"])
                newArr.push(["A", "T"])
            } else {
                if (str[i].includes('CG')) {
                    newArr.push(["C", "G"])
                    newArr.push(["G", "C"])
                } else {
                    if (str[i].includes('A')) {
                        newArr.push(["A", "T"])
                    } else {
                        if (str[i].includes('T')) {
                            newArr.push(["T", "A"])
                        } else {
                            if (str[i].includes("C")) {
                                newArr.push(["C", "G"])
                            } else {
                                if (str.includes("G")) {
                                    newArr.push(["G", "C"])
                                }

                            }

                        }

                    }

                }

            }

        }
    }
    return newArr

}

pairElement("ATCGA")
