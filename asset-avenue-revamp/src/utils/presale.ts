import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { Program, AnchorProvider, web3, BN, Wallet } from "@project-serum/anchor";
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";

import * as idl from "./presale_idl.json"; // Replace with your actual IDL file
import { ASSOCIATED_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
const PROGRAM_ID = new PublicKey("3nnfTx68bKCRXZdZfKoFFfryWbnR3asFGmfLsXNPtXxK"); // Your contract address
const PRESALE_SEED = "solana_presale";
const DATA_SEED = "my_data";
const STAKING_SEED = "solana_staking";
const STAKING_DATA_SEED = "staking_user_data";
const TOKEN_MINT = new PublicKey("HtcmNSmpM6xGWLH7TcUiyjXQcej32qc15wyzawJYKNMn");
const USDC_MINT = new PublicKey("4Fa3EWgea8bYwFjRdAxn9b7FhzFSYZR41Tnkn39SvSLX");
const getProvider = (wallet: Wallet) => {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed"); // Change to mainnet-beta for production
  const provider = new AnchorProvider(connection, wallet, { preflightCommitment: "processed" });
  return provider;
};

export const getProgram = (wallet: Wallet) => {
  const provider = getProvider(wallet);
  return new Program(idl as any, PROGRAM_ID, provider);
};

// Function to invest SOL in presale
export const investSol = async (publicKey:PublicKey,wallet: Wallet, amount: number,currency:"SOL"|"USD") => {
  try {
    const program = getProgram(wallet);
    const signer = publicKey;
console.log("signer",signer);
    // Derive PDA for presale and user data
    const [presalePda] = PublicKey.findProgramAddressSync(
      [Buffer.from(PRESALE_SEED)],
      PROGRAM_ID
    );
    const [dataPda] = PublicKey.findProgramAddressSync(
      [Buffer.from(DATA_SEED),signer.toBuffer()],
      PROGRAM_ID
    );
  
  
   
    const reciever_ata = await getAssociatedTokenAddress(
      TOKEN_MINT,   // The mint address of the SPL token
      signer,  // The receiver's wallet public key
      true   // Set to `true` if the account needs to be created as a PDA
  );
    const presale_ata = await getAssociatedTokenAddress(
      TOKEN_MINT,
      presalePda,
      true
    );
    const usdc_presale_ata = await getAssociatedTokenAddress(
      USDC_MINT,
      presalePda,
      true
    );
    const usdc_reciever_ata = await getAssociatedTokenAddress(
      USDC_MINT,
      signer,
      true
    );
    console.log("presalePda",presalePda.toString())
    console.log("presale_ata",presale_ata.toString())
/**
 *  const context = {
      data:dataPda,
      from:account2.publicKey,
      signer:account2.publicKey,
      presale:presalePda,
      investor_usdc_account:userUsdcTokenAccount.address,
      presaleUsdcAccount:presale_usdc_ata.address,
      usdcMint:usdc,
      presaleTokenAccount:presale_ata,
      tokenMint:mint,
      signerTokenAccount:reciever_ata,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    }
 */
  
    const context = {
      data:dataPda,
      from:signer,
      signer:signer,
      presale:presalePda,
      signerUsdcAccount:usdc_reciever_ata    ,
      presaleUsdcAccount:usdc_presale_ata,
      usdcMint:USDC_MINT,
      presaleTokenAccount:presale_ata,
      tokenMint:TOKEN_MINT,
      signerTokenAccount:reciever_ata,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    }
    if (currency == "SOL"){
    // Convert SOL to lamports
    amount = new BN(amount * web3.LAMPORTS_PER_SOL);
    }else{

    amount = new BN(amount * 1000000);
    }
    console.log(Number(amount))
    const tx = await program.methods
      .invest(amount,currency=="SOL"?0:1)
      .accounts(context)
      .rpc();

    console.log("Transaction successful:", tx);
    return tx;
  } catch (error) {
    console.error("Error investing SOL:", error);
    return null;
  }
};

// Function to check presale details
export const getPresaleInfo = async (wallet: any) => {
  try {
    const program = getProgram(wallet);
    const [presalePda] = PublicKey.findProgramAddressSync(
      [Buffer.from(PRESALE_SEED)],
      PROGRAM_ID
    );    
    const presaleData = await program.account.presaleInfo.fetch(presalePda);
    return presaleData;
  } catch (error) {
    console.error("Error fetching presale info:", error);
    return null;
  }
};


export const buyAndStakeTokens = async (publicKey:PublicKey,wallet: any, amount: number,currency:"SOL"|"USD") => {
  try {
    const program = getProgram(wallet);
    const signer = publicKey

    // Derive PDA for staking and user data
    const [stakingPda] = PublicKey.findProgramAddressSync(
          [Buffer.from(STAKING_SEED)],
          PROGRAM_ID
        );
    const [stakingDataPda] = PublicKey.findProgramAddressSync(
          [Buffer.from(STAKING_DATA_SEED),signer.toBuffer()],
          PROGRAM_ID
        );
      
        const [presalePda] = PublicKey.findProgramAddressSync(
          [Buffer.from(PRESALE_SEED)],
          PROGRAM_ID
        );
        const signer_ata = await getAssociatedTokenAddress(
          TOKEN_MINT,   // The mint address of the SPL token
          signer,  // The receiver's wallet public key
          true   // Set to `true` if the account needs to be created as a PDA
      );
        const staking_ata = await getAssociatedTokenAddress(
          TOKEN_MINT,
          stakingPda,
          true
        );
        const presale_ata = await getAssociatedTokenAddress(
          TOKEN_MINT,
          presalePda,
          true
        );
        const [dataPda] = PublicKey.findProgramAddressSync(
          [Buffer.from(DATA_SEED),signer.toBuffer()],
          PROGRAM_ID
        );
        const usdc_presale_ata = await getAssociatedTokenAddress(
          USDC_MINT,
          presalePda,
          true
        );
        const usdc_reciever_ata = await getAssociatedTokenAddress(
          USDC_MINT,
          signer,
          true
        );
        if (currency == "SOL"){
          // Convert SOL to lamports
          amount = new BN(amount * web3.LAMPORTS_PER_SOL);
          }else{
      
          amount = new BN(amount * 1000000);
          }

        

console.log(Number(amount))
    const tx = await program.methods
      .buyAndStake(amount,currency=="SOL"?0:1)
      .accounts({
        investmentData:dataPda,
        stakingData: stakingDataPda,
        presale:presalePda,
        staking: stakingPda,
        from: signer,
        signer: signer,
        tokenMint:TOKEN_MINT,
        presaleTokenAccount:presale_ata,
        stakingTokenAccount:staking_ata,
        signerTokenAccount:signer_ata,
        usdcMint:USDC_MINT,
        presaleUsdcAccount:usdc_presale_ata,
        signerUsdcAccount:usdc_reciever_ata,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
          })
      .rpc();

    console.log("Staking Transaction Successful:", tx);
    return tx;
  } catch (error) {
    console.error("Error staking tokens:", error);
    return null;
  }
};


// Function to Fetch Staking Info
export const getStakingInfo = async (wallet: any) => {
  try {
    const program = getProgram(wallet);
    const [stakingPda] = await PublicKey.findProgramAddress([Buffer.from(STAKING_SEED)], PROGRAM_ID);
    const stakingData = await program.account.stakingInfo.fetch(stakingPda);
    return stakingData;
  } catch (error) {
    console.error("Error fetching staking info:", error);
    return null;
  }
};