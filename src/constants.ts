import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'
// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = 'BgZYULwffQFARvqreWALeubMQtpGPFxeRaXDBPnmVrqE'

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  {
      mint: new PublicKey("vSYAPufpX2a4HpnkXguuoTznA5r2yZan8yP2RGnkvKm"),
      symbol: 'PNDC',
      name: 'PNDC',
      image: "https://media.discordapp.net/attachments/1127551018297741432/1207996226738589766/20240216_102515.jpg?ex=65e1ad27&is=65cf3827&hm=60f3ca8584451f262394ae06ba1ebde496ddec3d5ec94c8752d779050a19f3db&",
      decimals: 5,
      baseWager: 700000000 * 1e5,
    },
]
