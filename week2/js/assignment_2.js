console.log('Assignment 2: Function and Object');

function calculate(args) {
    // 確認有接收到物件
    // console.log(args);

    // 1. 用 switch case 來判斷運算符號 + - *
    // switch 參數為物件的 op 屬性，故參數為 args.op
    switch (args.op) {
        case '+':
            return args.n1 + args.n2;
        case '-':
            return args.n1 - args.n2;

        // 設定需輸入的乘法符號 " * "
        case '*':
            return args.n1 * args.n2;
        default:
            return 'Not supported';
    }
}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'

