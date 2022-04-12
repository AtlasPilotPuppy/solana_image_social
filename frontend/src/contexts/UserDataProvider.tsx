import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import * as anchor from '@project-serum/anchor';
import { FC } from 'react';
import { Address, Program, ProgramAccount } from '@project-serum/anchor';
import { Connection } from '@solana/web3.js';
import { AnchorWallet, useAnchorWallet, useConnection, WalletContext } from '@solana/wallet-adapter-react';
import React from 'react';
import { DisplayImage } from '@/models/images';
import { ProgramContextState, useProgram } from './ProgramProvider';
import { IPFSConnectionContextState, useIPFSConnection } from './IpfsContext';
import { IPFS } from 'ipfs-core';

export interface UserDataProvider {
  children?: ReactNode;
}

export const image_to_model = async (
  images: ProgramAccount[],
  client: IPFS
): Promise<DisplayImage[]> => {
  const track_models: DisplayImage[] = [];
  for (const image of images) {
    track_models.push(
      new DisplayImage(
        image.account.cid,
        image.account.trackTitle,
        image.publicKey,
      )
    );
  }
  return track_models;
};

export const ImagesConnectionProvider: FC<UserDataProvider> = ({
  children
}) => {
  const [myImages, setMyImages] = useState([]);
  const[allImages, setAllImages] = useState([]);
  const program = useProgram();
  const wallet = useAnchorWallet();
  const ipfs = useIPFSConnection()

  useEffect(() => {
    (async () => {
      if (!program.program){return}
      const myImages = program && program.program?.account && wallet?.publicKey
        ? await image_to_model(
            await (
              await program.program?.account?.track.all([
                { memcmp: { offset: 8, bytes: wallet.publicKey.toBase58() } },
              ])
            ).slice(0, 5),
            ipfs.ipfsClient
          )
        : null;
      setMyImages(myImages);
      const allImages = await image_to_model(
        await program.program?.account.track.all(),
        ipfs.ipfsClient
      );
    setAllImages(allImages);
      const trackState = {
        myImages: myImages,
        allIMages: allImages
      };
      return trackState;

    })();
  }, [program, wallet, ipfs]);

  return (
    <UserDataContext.Provider
      value={{
        userImages:myImages,
        allImages:allImages,
        displayName: "ImageContext"
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export interface UserDataContextState {
  userImages: DisplayImage[],
  allImages: DisplayImage[],
  displayName?: String
}

export const UserDataContext = createContext<UserDataContextState>(
  {} as UserDataContextState
);

export function useImages(): UserDataContextState {
  return useContext(UserDataContext);
}
