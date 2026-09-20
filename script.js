class Block {
    constructor(index, data, previousHash = "") {
        this.index = index;
        this.timestamp = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = "";
    }

    async calculateHash() {
        const blockData =
            this.index +
            this.timestamp +
            JSON.stringify(this.data) +
            this.previousHash;

        const encoder = new TextEncoder();
        const data = encoder.encode(blockData);

        const hashBuffer = await crypto.subtle.digest("SHA-256", data);

        const hashArray = Array.from(new Uint8Array(hashBuffer));

        return hashArray
            .map(byte => byte.toString(16).padStart(2, "0"))
            .join("");
    }
}


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "Genesis Block", "0");
    }

    async isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {

            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            const recalculatedHash = await currentBlock.calculateHash();

            if (currentBlock.hash !== recalculatedHash) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}


async function startBlockchain() {

    const myBlockchain = new Blockchain();

    // Calculate Genesis Block hash
    const genesisBlock = myBlockchain.chain[0];
    genesisBlock.hash = await genesisBlock.calculateHash();

    // Create Block 1 using Genesis hash
    const block1 = new Block(
        1,
        "Alice sends 10 coins to Bob",
        genesisBlock.hash
    );

    // Calculate Block 1 hash
    block1.hash = await block1.calculateHash();

    // Add Block 1 to blockchain
    // Add Block 1 to blockchain
myBlockchain.chain.push(block1);

// Create Block 2
const block2 = new Block(
    2,
    "Bob sends 5 coins to Charlie",
    block1.hash
);

// Calculate Block 2 hash
block2.hash = await block2.calculateHash();

// Add Block 2
myBlockchain.chain.push(block2);

console.log("Complete Blockchain:");
console.log(myBlockchain);

const valid = await myBlockchain.isChainValid();

console.log("Is blockchain valid?", valid);

displayBlockchain(myBlockchain);


// Validate button
document.getElementById("validateBtn").addEventListener("click", async () => {

    const isValid = await myBlockchain.isChainValid();

    const status = document.getElementById("status");

    if (isValid) {
        status.textContent = "✅ Blockchain is valid";
        status.className = "status-valid";
    } else {
        status.textContent = "❌ Blockchain has been tampered with";
        status.className = "status-invalid";
    }
});


// Tamper button
document.getElementById("tamperBtn").addEventListener("click", () => {

    myBlockchain.chain[1].data = "Alice sends 1000 coins to Bob";

    displayBlockchain(myBlockchain);

    console.log("Blockchain has been tampered with!");
});

}

startBlockchain();
function displayBlockchain(blockchain) {

    const container = document.getElementById("blockchain");

    container.innerHTML = "";

    blockchain.chain.forEach(block => {

        const blockElement = document.createElement("div");

        blockElement.className = "block";

        blockElement.innerHTML = `
            <h3>🔗 Block #${block.index}</h3>

            <p><strong>Data:</strong> ${block.data}</p>

            <p>
                <strong>Timestamp:</strong>
                ${block.timestamp}
            </p>

            <p>
                <strong>Previous Hash:</strong>
                <span class="hash">${block.previousHash}</span>
            </p>

            <p>
                <strong>Hash:</strong>
                <span class="hash">${block.hash}</span>
            </p>
        `;

        container.appendChild(blockElement);
    });
}