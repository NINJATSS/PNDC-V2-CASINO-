import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`

const Welcome = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-image: url('banner.png'); 
  background-size: cover;
  background-position: center; 

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1>PNDC SOLANA 👋</h1>
        <p>
          Welcome to DragonSol and PNDC solana casino, 100% of the funds will be used to buy $PNDC and airdrop to holders. ( HOLDING A MIN OF 100B PNDC ) ENJOY AND DON'T GAMBLE WITH MORE THEN YOU CAN AFFORD TO LOSE
        </b>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://birdeye.so/token/vSYAPufpX2a4HpnkXguuoTznA5r2yZan8yP2RGnkvKm?chain=solana', '_blank')}>
          💸 BUY PNDC
        </button>
        <button onClick={() => window.open('https://twitter.com/DRAGONSOL2024', '_blank')}>
          👨‍💻 GOKU TWITTER
        </button>
        <button onClick={() => window.open('https://twitter.com/Kingsol_69', '_blank')}>
          💬 TWITTER
        </button>
      </Buttons>
    </Welcome>
  )
}
