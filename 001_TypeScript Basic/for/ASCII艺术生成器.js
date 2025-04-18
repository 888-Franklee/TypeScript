"use strict";
function generatePyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j < rows - i; j++)
            output += ' ';
        for (let k = 0; k <= i * 2; k++)
            output += '*';
        console.log(output);
    }
}
// 尝试生成不同图案（钻石、三角形等），可添加类型参数控制图案类型
