import React from 'react'
import { CardRed, CardBlack, ContentUp, ContentDown, Container } from './styles'

const index = ({ value, icon }) => {
  return (
    <>
      {icon === 'hearts' && (
        <CardRed>
          <Container>
            <ContentUp>
              <p>{value}</p>
              <img src='images/heartImage.png' alt='hearts' />
            </ContentUp>
            <ContentDown>
              <p>{value}</p>
              <img src='images/heartImage.png' alt='hearts' />
            </ContentDown>
          </Container>
        </CardRed>
      )}
      {icon === 'diamonds' && (
        <CardRed>
          <Container>
            <ContentUp>
              <p>{value}</p>
              <img src='images/diamondImage.png' alt='diamonds' />
            </ContentUp>
            <ContentDown>
              <p>{value}</p>
              <img src='images/diamondImage.png' alt='diamonds' />
            </ContentDown>
          </Container>
        </CardRed>
      )}
      {icon === 'spades' && (
        <CardBlack>
          <Container>
            <ContentUp>
              <p>{value}</p>
              <img src='images/spadeImage.png' alt='spades' />
            </ContentUp>
            <ContentDown>
              <p>{value}</p>
              <img src='images/spadeImage.png' alt='spades' />
            </ContentDown>
          </Container>
        </CardBlack>
      )}

      {icon === 'clubs' && (
        <CardBlack>
          <Container>
            <ContentUp>
              <p>{value}</p>
              <img src='images/clubImage.png' alt='clubs' />
            </ContentUp>
            <ContentDown>
              <p>{value}</p>
              <img src='images/clubImage.png' alt='clubs' />
            </ContentDown>
          </Container>
        </CardBlack>
      )}
    </>
  )
}

export default index
