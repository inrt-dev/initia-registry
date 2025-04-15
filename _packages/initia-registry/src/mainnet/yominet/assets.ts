import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "yominet",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/8f73cfaf153520f511b4fc0bd71d60d64b4e19eff04a350e642718a3c1ab3b06",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/8f73cfaf153520f511b4fc0bd71d60d64b4e19eff04a350e642718a3c1ab3b06",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "11",
          },
        },
      ],
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
      },
    },
    {
      description: "Circle’s USD Coin on Initia",
      denom_units: [
        {
          denom:
            "l2/32c6f95dc503698022e06088840f5eba8f4a4eae57b86bd2640feb6a0f3b18f8",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "l2/32c6f95dc503698022e06088840f5eba8f4a4eae57b86bd2640feb6a0f3b18f8",
      display: "USDC",
      name: "USD Coin",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "noble",
            base_denom: "uusdc",
            channel_id: "channel-129",
          },
          chain: {
            channel_id: "channel-3",
            path: "transfer/channel-3/uusdc",
          },
        },
        {
          type: "op",
          counterparty: {
            base_denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "11",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
      },
    },
    {
      description: "Milkyway’s liquid staked TIA on Initia",
      denom_units: [
        {
          denom:
            "l2/7d8374bd7b0289ee895a260fd45577ae23b7e6946cae8c0deb60d750f054e1ad",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 6,
        },
      ],
      base: "l2/7d8374bd7b0289ee895a260fd45577ae23b7e6946cae8c0deb60d750f054e1ad",
      display: "milkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "osmosis",
            base_denom:
              "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
            channel_id: "channel-100108",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
          },
        },
        {
          type: "op",
          counterparty: {
            base_denom:
              "ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "11",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
      },
    },
    {
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom:
            "l2/a39ea81b865d2392baf42825768cc63c973bb028e826370ede91aa560384d297",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "l2/a39ea81b865d2392baf42825768cc63c973bb028e826370ede91aa560384d297",
      display: "TIA",
      name: "Celestia",
      symbol: "TIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "celestia",
            base_denom: "utia",
            channel_id: "channel-78",
          },
          chain: {
            channel_id: "channel-10",
            path: "transfer/channel-10/utia",
          },
        },
        {
          type: "op",
          counterparty: {
            base_denom:
              "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "11",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
      },
    },
    {
      description: "ETH token",
      denom_units: [
        {
          denom:
            "l2/2c1ab7b2d0d8bf67c45f1ea458dc2810a30d54ea02215bc1596d97b9e3127438",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "l2/2c1ab7b2d0d8bf67c45f1ea458dc2810a30d54ea02215bc1596d97b9e3127438",
      display: "ETH",
      name: "ETH Token",
      symbol: "ETH",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom:
              "move/c3b42c557c243205835971567f9516c78208f342023cf1c0c15ed8f3d3a6a271",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "11",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
      },
    },
  ],
};
export default info;
