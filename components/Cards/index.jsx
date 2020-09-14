import React from 'react'
import { CardRed, CardBlack, ContentUp, ContentDown, Container } from './styles'

const index = ({ value, icon }) => {
  return (
    <>
      {icon[0] === 'hearts' && (
        <CardRed>
          <Container>
            <ContentUp>
              {value[0]}
              <img src='images/heartImage.png' alt='hearts' />
            </ContentUp>
            <ContentDown>
              {value[0]}
              <img src='images/heartImage.png' alt='hearts' />
            </ContentDown>
          </Container>
        </CardRed>
      )}
      {icon[0] === 'diamonds' && (
        <CardRed>
          <Container>
            <ContentUp>
              {value[0]}
              <img src='images/diamondImage.png' alt='diamonds' />
            </ContentUp>
            <ContentDown>
              {value[0]}
              <img src='images/diamondImage.png' alt='diamonds' />
            </ContentDown>
          </Container>
        </CardRed>
      )}
      {icon[0] === 'spades' && (
        <CardBlack>
          <Container>
            <ContentUp>
              {value[0]}
              <img src='images/spadeImage.png' alt='spades' />
            </ContentUp>
            <ContentDown>
              {value[0]}
              <img src='images/spadeImage.png' alt='spades' />
            </ContentDown>
          </Container>
        </CardBlack>
      )}

      {icon[0] === 'clubs' && (
        <CardBlack>
          <Container>
            <ContentUp>
              {value[0]}
              <img src='images/clubImage.png' alt='clubs' />
            </ContentUp>
            <ContentDown>
              {value[0]}
              <img src='images/clubImage.png' alt='clubs' />
            </ContentDown>
          </Container>
        </CardBlack>
      )}
    </>
  )
}

export default index
