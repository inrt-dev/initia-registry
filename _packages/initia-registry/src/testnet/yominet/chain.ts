import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "yominet",
  pretty_name: "Yominet",
  chain_id: "preyominet-1",
  evm_chain_id: 4471190363524365,
  bech32_prefix: "init",
  network_type: "testnet",
  website: "https://playtest.kamigotchi.io",
  apis: {
    rpc: [
      {
        address: "https://rpc.preyominet-1.initia.tech",
      },
    ],
    rest: [
      {
        address: "https://rest.preyominet-1.initia.tech",
      },
    ],
    grpc: [
      {
        address: "grpc.preyominet-1.initia.tech:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://json-rpc.preyominet.initia.tech",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://json-rpc-websocket.preyominet.initia.tech",
      },
    ],
  },
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
        fixed_min_gas_price: 1000000000,
        low_gas_price: 1000000000,
        average_gas_price: 1500000000,
        high_gas_price: 2000000000,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/preyominet-1",
      tx_page: "https://scan.testnet.initia.xyz/preyominet-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/preyominet-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/yominet.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/yominet.png",
  },
  metadata: {
    op_bridge_id: "80",
    op_denoms: ["uinit"],
    executor_uri:
      "https://maze-api-opinit-9ce4b2ff-e329-459d-8baa-ae49f95f33b2.ane1-prod-nocsm.newmetric.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-2",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.5.5",
    },
  },
};
export default info;
