"use strict";
// Hàm tính toán cơ bản
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function power(base, exponent) { return Math.pow(base, exponent); }
function sqrt(base, root) { return Math.pow(base, 1 / root); }
function factorial(n) {
    if (n < 0 || !Number.isInteger(n))
        throw new Error("Giai thừa chỉ tính cho số nguyên không âm");
    let result = 1;
    for (let i = 2; i <= n; i++)
        result *= i;
    return result;
}
// Helper
function parseNumber(str) {
    let num = Number(str);
    return isNaN(num) ? null : num;
}
function showResult(res) {
    document.getElementById("result").innerText = res;
}
function showError(msg) {
    document.getElementById("error").innerText = msg;
}
function clearMessages() {
    showResult('');
    showError('');
}
function getInputs() {
    const input1 = document.getElementById("input1").value.trim();
    const input2 = document.getElementById("input2").value.trim();
    return [input1, input2];
}
function handleOp(op) {
    clearMessages();
    const [str1, str2] = getInputs();
    let n1 = parseNumber(str1);
    let n2 = parseNumber(str2);
    try {
        switch (op) {
            case '+':
                if (n1 === null || n2 === null)
                    throw new Error("Nhập số hợp lệ!");
                showResult(`Kết quả: ${add(n1, n2)}`);
                break;
            case '-':
                if (n1 === null || n2 === null)
                    throw new Error("Nhập số hợp lệ!");
                showResult(`Kết quả: ${subtract(n1, n2)}`);
                break;
            case '*':
                if (n1 === null || n2 === null)
                    throw new Error("Nhập số hợp lệ!");
                showResult(`Kết quả: ${multiply(n1, n2)}`);
                break;
            case '/':
                if (n1 === null || n2 === null)
                    throw new Error("Nhập số hợp lệ!");
                if (n2 === 0)
                    throw new Error("Không thể chia cho 0!");
                showResult(`Kết quả: ${divide(n1, n2)}`);
                break;
            case '^':
                if (n1 === null || n2 === null)
                    throw new Error("Nhập số hợp lệ!");
                showResult(`Kết quả: ${power(n1, n2)}`);
                break;
            case '√':
                if (n1 === null || n2 === null)
                    throw new Error("Nhập số hợp lệ!");
                if (n2 === 0)
                    throw new Error("Không thể lấy căn bậc 0!");
                showResult(`Kết quả: ${sqrt(n1, n2)}`);
                break;
            case '!':
                if (n1 === null)
                    throw new Error("Nhập số hợp lệ vào ô số 1!");
                showResult(`Kết quả: ${factorial(n1)}`);
                break;
        }
    }
    catch (e) {
        showError(e.message);
    }
}
window.onload = function () {
    document.getElementById("add").onclick = () => handleOp('+');
    document.getElementById("subtract").onclick = () => handleOp('-');
    document.getElementById("multiply").onclick = () => handleOp('*');
    document.getElementById("divide").onclick = () => handleOp('/');
    document.getElementById("power").onclick = () => handleOp('^');
    document.getElementById("sqrt").onclick = () => handleOp('√');
    document.getElementById("factorial").onclick = () => handleOp('!');
};
