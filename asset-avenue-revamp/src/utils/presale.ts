import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { Program, AnchorProvider, web3, BN, Wallet } from "@project-serum/anchor";
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";

import * as idl from "./presale_idl.json"; // Replace with your actual IDL file
import { ASSOCIATED_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
const PROGRAM_ID = new PublicKey("HhcgRB6qCDqJW94QC5QKg6tsETKhy4zoVB31L3Y17jDM"); // Your contract address
const PRESALE_SEED = "solana_presale";
const DATA_SEED = "my_data";
const STAKING_SEED = "solana_staking";
const STAKING_DATA_SEED = "staking_user_data";
const TOKEN_MINT = new PublicKey("HtcmNSmpM6xGWLH7TcUiyjXQcej32qc15wyzawJYKNMn");
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
export const investSol = async (publicKey:PublicKey,wallet: Wallet, amount: number) => {
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
    console.log("presalePda",presalePda.toString())
    console.log("presale_ata",presale_ata.toString())

  
    const context = {
      data:dataPda,
      from:signer,
      presale:presalePda,
      signer:signer,
      presaleTokenAccount:presale_ata,
      tokenMint:TOKEN_MINT,
      signerTokenAccount:reciever_ata,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    }

    // Convert SOL to lamports
    const lamports = new BN(amount * web3.LAMPORTS_PER_SOL);

    const tx = await program.methods
      .investSol(lamports)
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


export const stakeTokens = async (publicKey:PublicKey,wallet: any, amount: number) => {
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
    // Convert amount to proper decimals
    const lamports = new BN(amount * 10 ** 5); // Assuming 5 decimals in the token

    const tx = await program.methods
      .stake(lamports)
      .accounts({
        stakingData: stakingDataPda,
        from: signer,
        staking: stakingPda,
        tokenMint:TOKEN_MINT,
        stakingTokenAccount:staking_ata,
        signerTokenAccount:signer_ata,
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