import { Adapter, FetchOptions, ProtocolType } from "../adapters/types";
import { CHAIN } from "../helpers/chains";
import { getTokenDiff } from "../helpers/token";

const adapter: Adapter = {
  version: 2,
  adapter: {
    [CHAIN.AVAX]: {
      fetch: async (options: FetchOptions) => {
        const dailyFees = await getTokenDiff({ target: '0x97c5637A19ba8f622011BFE74710097204Bb5897', includeGasToken: true, options})

        return {
          dailyFees: dailyFees,
          dailyRevenue: dailyFees,
        };
      },
      start: 1723423318
    },
  },
  protocolType: ProtocolType.PROTOCOL
}

export default adapter;
