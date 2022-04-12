import { createContext, useContext, useEffect, useState } from 'react';

import { IPFS, create } from 'ipfs-core';
import { create as httpCreate } from 'ipfs-http-client';
import { FC } from 'react';
import urlExist from 'url-exist';
//TODO - move secrets out of here
const projectId = '26kSkVGBv2Hpojs4LM2Jd97p799';
const projectSecret = '0df8688fa57a9a29392280b3423eca11';
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

export interface IPFSConnectionProviderProps {
  ipfsClient: IPFS;
  type: 'native' | 'http';
}

const infuraCreateParams = {
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth
  }
};

const localCreateParams = { host: 'localhost', port: 5001 };
const localUrl = 'http://localhost:5001';

export const IPFSConnectionProvider: FC<{}> = (props) => {
  const { children } = props;
  const [id, setId] = useState(null);
  const [ipfs, setIpfs] = useState(null);
  const [nodeType, setNodeType] = useState('');
  const [version, setVersion] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (ipfs) return;
      let ipfsNode;
      try {
        ipfsNode = await create({ repo: `ok ${Math.random()}` });
        const nodeId = await ipfsNode.id();
        setId(nodeId.id);
        setNodeType('Core');
        setIsOnline(ipfsNode.isOnline);
      } catch (e) {
        const params = (await urlExist(localUrl))
          ? localCreateParams
          : infuraCreateParams;
        ipfsNode = await httpCreate(params);
        setNodeType('http');
      }

      const nodeVersion = await ipfsNode.version();
      setVersion(nodeVersion);
      setIpfs(ipfsNode);
      setVersion(nodeVersion.version);
    };

    init();
  }, [ipfs]);

  return (
    <IPFSConnectionContext.Provider
      value={{ ipfsClient: ipfs, id: id, type: nodeType }}
    >
      {children}
    </IPFSConnectionContext.Provider>
  );
};
export interface IPFSConnectionContextState {
  ipfsClient: IPFS;
  id: String;
  type: String;
}

export const IPFSConnectionContext = createContext<IPFSConnectionContextState>(
  {} as IPFSConnectionContextState
);

export function useIPFSConnection(): IPFSConnectionContextState {
  return useContext(IPFSConnectionContext);
}
