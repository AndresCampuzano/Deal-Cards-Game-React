import React, { useState, useEffect } from 'react'
import { Container, Button, ContainerCards } from './styles'
import { alreadyShowedCardsAction, scrambleData } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import CardComponent from '../Cards'
import NoCards from '../NoCards'
import CardsPreviewBeforeStart from '../CardsPreviewBeforeStart'

const Main = () => {
  const [slot01, setSlot01] = useState()
  const [slot02, setSlot02] = useState()
  const [slot03, setSlot03] = useState()
  const [slot04, setSlot04] = useState()
  const [game, setGame] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [showPreviewCards, setShowPreviewCards] = useState(true)

  const dataRedux = useSelector(s => s.cards.originalData)

  useEffect(() => {
    // scrambling data...
    let currentIndex = dataRedux.length,
      temporaryValue,
      randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = dataRedux[currentIndex]
      dataRedux[currentIndex] = dataRedux[randomIndex]
      dataRedux[randomIndex] = temporaryValue
    }
    dispatch(scrambleData(dataRedux))
  }, [])

  const dispatch = useDispatch()

  const handleDealCards = () => {
    if (dataRedux.length < 4) {
      setGame(false)
      setGameFinished(true)
      setShowPreviewCards(false)
      return
    } else {
      setGame(true)
      setGameFinished(false)
      setShowPreviewCards(false)
    }
    // ---

    let pod01 = dataRedux[dataRedux.length - 4]
    let pod02 = dataRedux[dataRedux.length - 3]
    let pod03 = dataRedux[dataRedux.length - 2]
    let pod04 = dataRedux[dataRedux.length - 1]
    dataRedux.filter(i => i.id !== pod01.id)
    dataRedux.filter(i => i.id !== pod02.id)
    dataRedux.filter(i => i.id !== pod03.id)
    dataRedux.filter(i => i.id !== pod04.id)

    setSlot01(pod01)
    setSlot02(pod02)
    setSlot03(pod03)
    setSlot04(pod04)

    dispatch(alreadyShowedCardsAction(pod01.id))
    dispatch(alreadyShowedCardsAction(pod02.id))
    dispatch(alreadyShowedCardsAction(pod03.id))
    dispatch(alreadyShowedCardsAction(pod04.id))
  }

  return (
    <Container>
      <Button onClick={handleDealCards} disabled={gameFinished}>
        Deal cards
      </Button>
      <section>
        {game && (
          <ContainerCards>
            <CardComponent
              icon={slot01.iconCard}
              value={slot01.name}
              id={slot01.id}
            />
            <CardComponent
              icon={slot02.iconCard}
              value={slot02.name}
              id={slot02.id}
            />
            <CardComponent
              icon={slot03.iconCard}
              value={slot03.name}
              id={slot03.id}
            />
            <CardComponent
              icon={slot04.iconCard}
              value={slot04.name}
              id={slot04.id}
            />
          </ContainerCards>
        )}
        {showPreviewCards && <CardsPreviewBeforeStart />}
        {gameFinished && <NoCards />}
      </section>
    </Container>
  )
}

export default Main
