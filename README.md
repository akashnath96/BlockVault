# 🔐 BlockVault

A simple educational blockchain ledger built using HTML, CSS, and JavaScript.

BlockVault demonstrates how blockchain blocks are connected using cryptographic hashes and how modifying data inside a block can invalidate the chain.

## 📸 Demo

![BlockVault Demo](./blockvault-demo.png)

## 🚀 Features

* Creates a Genesis Block
* Creates multiple blockchain blocks
* Generates SHA-256 hashes
* Links each block using the previous block's hash
* Validates the blockchain
* Demonstrates tamper detection
* Interactive browser interface

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Web Crypto API
* SHA-256 Hashing

## 🧩 How It Works

Each block contains:

* Block index
* Transaction/data
* Timestamp
* Previous block hash
* Current block hash

The current block's hash is calculated from the contents of the block.

If the data inside a block is changed, its calculated hash changes.

The next block stores the previous block's original hash. Therefore, changing an earlier block causes the chain validation to fail.

### Blockchain Structure

```text
Block 0 (Genesis)
      ↓
Block 1
      ↓
Block 2
      ↓
Block 3
```

Each block stores the hash of the block before it, creating a linked chain.

## 🔐 Tamper Detection

BlockVault provides a simple demonstration of blockchain data integrity.

### Before Tampering

When the blockchain has not been modified, validation returns:

✅ `true`

This means the blocks are correctly connected and their hashes match their contents.

### After Tampering

When the data inside a block is modified, validation returns:

❌ `false`

This demonstrates how changing data inside a block breaks the integrity of the blockchain.

## 🧪 Example

Initially, a block may contain:

```text
Alice sends 10 coins to Bob
```

After the **Tamper With Block** button is used, the data is changed to:

```text
Alice sends 1000 coins to Bob
```

The block's original hash no longer matches the hash calculated from its modified data.

As a result, the blockchain becomes invalid.

## 📂 Project Structure

```text
BlockVault/
│
├── index.html
├── style.css
├── script.js
├── blockvault-demo.png
└── README.md
```

## ▶️ How to Run

1. Clone or download the repository.
2. Open the `BlockVault` folder in VS Code.
3. Open `index.html` in a web browser.
4. The blockchain will be displayed with its blocks and hashes.
5. Click **Validate Blockchain** to check the chain.
6. Click **Tamper With Block** to modify a block.
7. Click **Validate Blockchain** again to observe the tamper detection.

## 🎯 Project Goal

The goal of BlockVault is to provide a beginner-friendly practical demonstration of fundamental blockchain concepts, including:

* Cryptographic hashing
* Block linking
* Blockchain validation
* Data integrity
* Tamper detection

The project focuses on understanding the basic structure and integrity mechanism of a blockchain rather than implementing a production cryptocurrency or decentralized network.

## 📌 Future Improvements

Possible future improvements include:

* Proof of Work
* Mining difficulty
* Transaction input forms
* Wallet simulation
* Digital signatures
* Persistent blockchain storage
* Peer-to-peer blockchain simulation
* More advanced blockchain visualization

## 👨‍💻 Author

Built as a practical blockchain learning project.
