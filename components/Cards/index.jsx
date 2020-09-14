import React from 'react'
import { CardRed, CardBlack, ContentUp, ContentDown, Container } from './styles'

const index = ({ value, icon }) => {
  return (
    <>
      {icon === 'hearts' && (
        <CardRed>
          <Container>
            <ContentUp>
              {value}
              <img src='images/heartImage.png' alt='hearts' />
            </ContentUp>
            <ContentDown>
              {value}
              <img src='images/heartImage.png' alt='hearts' />
            </ContentDown>
          </Container>
        </CardRed>
      )}
      {icon === 'diamonds' && (
        <CardRed>
          <Container>
            <ContentUp>
              {value}
              <img src='images/diamondImage.png' alt='diamonds' />
            </ContentUp>
            <ContentDown>
              {value}
              <img src='images/diamondImage.png' alt='diamonds' />
            </ContentDown>
          </Container>
        </CardRed>
      )}
      {icon === 'spades' && (
        <CardBlack>
          <Container>
            <ContentUp>
              {value}
              <img src='images/spadeImage.png' alt='spades' />
            </ContentUp>
            <ContentDown>
              {value}
              <img src='images/spadeImage.png' alt='spades' />
            </ContentDown>
          </Container>
        </CardBlack>
      )}

      {icon === 'clubs' && (
        <CardBlack>
          <Container>
            <ContentUp>
              {value}
              <img src='images/clubImage.png' alt='clubs' />
            </ContentUp>
            <ContentDown>
              {value}
              <img src='images/clubImage.png' alt='clubs' />
            </ContentDown>
          </Container>
        </CardBlack>
      )}
    </>
  )
}

export default index
