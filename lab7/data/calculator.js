function insertStringIntoText(text,string,num1,num2 ){ 
        let ans = text;
        for(let i =1;i<=num1;i++){
            console.log(i);
            ans = [ans.slice(0,((i-1)*string.length+i*num2)),string,ans.slice(((i-1)*string.length+i*num2))].join('');
            console.log(ans);
        }
        return ans;

    }

let exportedMethods = {

    textManipulator(text,string,num1,num2 ){

        if (text === '') throw "Must provide a text";
        if (string === '') throw "Must provide a string";

        if (typeof num1 !== "number") throw "Must provide a number";
        if (isNaN(num1)) throw "Must provide a number";
        if (typeof num2 !== "number") throw "Must provide a number";
        if (isNaN(num2)) throw "Must provide a number";

        return insertStringIntoText(text,string,num1,num2);
    }
}

module.exports = exportedMethods;