const {Connection, 
        PublicKey, 
        ClusterApiUrl, 
        Keypair, 
        LAMPORTS_FOR_SOL} = require('@solana/web3.js')

const wallet= new Keypair()
const publicKey= new PublicKey(wallet._keypair.publicKey)
const secretKey= wallet._keypair.secretKey
console.log("pubulic key", publicKey)
console.log("secret key", secretKey)