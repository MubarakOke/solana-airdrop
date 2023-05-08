const {Connection, 
        PublicKey, 
        Keypair, 
        LAMPORTS_FOR_SOL,
        clusterApiUrl} = require('@solana/web3.js')

const wallet= new Keypair()
const publicKey= new PublicKey(wallet._keypair.publicKey)
const secretKey= wallet._keypair.secretKey

const getWalletBalance= async ()=>{
    try{
        const connection= new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance= await connection.getBalance(publicKey)
        console.log("wallet balance is :",walletBalance)
    }
    catch (err){

    }
}

const main= (async()=>{
    await getWalletBalance()
})()

