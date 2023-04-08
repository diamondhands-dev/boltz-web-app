import { networks } from "bitcoinjs-lib";
export const network = "testnet";
export const net = networks[network];
export const bolt11_prefix = "lntb";
export const loglevel = "debug";
export const api_url = "https://testnet.boltz.exchange/api";
export const mempool_url = "https://mempool.space/testnet";
export const mempool_ws_url = "wss://mempool.space/testnet/api/v1/ws";