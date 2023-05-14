const const0Btn = document.getElementById("const0");
const const1Btn = document.getElementById("const1");
const PDNFBtn = document.getElementById("PDNF");
const PCNFBtn = document.getElementById("PCNF");

const result = document.getElementById("result");

const matrix = [
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0],
];

const getConst0Pos = () => {
    const zeroArr = [];
    for (let i = 0; i < 8; i++) {
        if (matrix[3][i] === 1 && matrix[0][i] === 0 && matrix[1][i] === 0 && matrix[2][i] === 0) {
            zeroArr.push(i + 1);
        }
    }
    return zeroArr;
};
const getConst1Pos = () => {
    const oneArr = [];
    for (let i = 0; i < 8; i++) {
        if (matrix[3][i] === 1 && matrix[0][i] === 1 && matrix[1][i] === 1 && matrix[2][i] === 1) {
            oneArr.push(i + 1);
        }
    }
    return oneArr;
};

const getPDNF = () => {
    const PDNFArr = [];
    for (let i = 0; i < 8; i++) {
        const PDNFPart = [];
        if (matrix[3][i] === 1) {
            matrix[0][i] === 1 ? PDNFPart.push("x") : PDNFPart.push("!x");
            matrix[1][i] === 1 ? PDNFPart.push("y") : PDNFPart.push("!y");
            matrix[2][i] === 1 ? PDNFPart.push("z") : PDNFPart.push("!z");
            PDNFArr.push(PDNFPart);
        }
    }
    const result = PDNFArr.map((item) => {
        return item.join(" ");
    }).join(" + ");
    return result;
};

const getPCNF = () => {
    const PCNFArr = [];
    for (let i = 0; i < 8; i++) {
        const PDNFPart = [];
        if (matrix[3][i] === 0) {
            matrix[0][i] === 0 ? PDNFPart.push("x") : PDNFPart.push("!x");
            matrix[1][i] === 0 ? PDNFPart.push("y") : PDNFPart.push("!y");
            matrix[2][i] === 0 ? PDNFPart.push("z") : PDNFPart.push("!z");
            PCNFArr.push(PDNFPart);
        }
    }
    const result = PCNFArr.map((item) => {
        return "(" + item.join(" + ") + ")";
    }).join(" * ");
    return result;
};

const0Btn.addEventListener("click", () => {
    result.innerHTML = getConst0Pos().length === 0 ? "Немає констант зберігаючих 0" : "Позиції констант зберігаючих 0: " + getConst0Pos();
});

const1Btn.addEventListener("click", () => {
    result.innerHTML = getConst1Pos().length === 0 ? "Немає констант зберігаючих 1" : "Позиції констант зберігаючих 1: " + getConst1Pos();
});

PDNFBtn.addEventListener("click", () => {
    result.innerHTML = "Формула ДДНФ: " + getPDNF();
});

PCNFBtn.addEventListener("click", () => {
    result.innerHTML = "Формула ДКНФ: " + getPCNF();
});
