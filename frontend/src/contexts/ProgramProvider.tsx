import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import * as anchor from '@project-serum/anchor';
import { FC } from 'react';
import { Address, Program } from '@project-serum/anchor';
import { Connection } from '@solana/web3.js';
import { AnchorWallet, useAnchorWallet, useConnection, WalletContext } from '@solana/wallet-adapter-react';
import React from 'react';

export interface ProgramConnectionProviderProps {
  programId: Address;
  children?: ReactNode;
}

export const ProgramConnectionProvider: FC<ProgramConnectionProviderProps> = ({
  programId,
  children
}) => {
  const [program, setProgram] = useState(null);
  const [idl, setIdl] = useState(null);
  const connectionCtx = useConnection();
  const walletCtx = useAnchorWallet();
  useEffect(() => {
    (async () => {
      if (!walletCtx?.publicKey) return;
      const provider = new anchor.Provider(connectionCtx.connection, walletCtx, {
        preflightCommitment: 'recent'
      });
      const chain_idl = await anchor.Program.fetchIdl(programId, provider);
      const program = new anchor.Program(chain_idl, programId, provider);
      setProgram(program);
      setIdl(idl);
    })();
  }, [walletCtx, connectionCtx.connection, walletCtx?.publicKey]);

  return (
    <ProgramConnectionContext.Provider
      value={{
        program: program,
        idl: idl,
        programId: programId,
        connection: connectionCtx.connection,
        wallet: walletCtx
      }}
    >
      {children}
    </ProgramConnectionContext.Provider>
  );
};
export interface ProgramContextState {
  program: Program;
  idl: anchor.Idl;
  programId: Address;
  wallet: AnchorWallet;
  connection: Connection;
  displayName: "ProgramState"
}

export const ProgramConnectionContext = createContext<ProgramContextState>(
  {} as ProgramContextState
);

export function useProgram(): ProgramContextState {
  return useContext(ProgramConnectionContext);
}
