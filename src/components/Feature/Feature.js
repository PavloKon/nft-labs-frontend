import React from 'react'
import '../../assets/scss/home/feature.scss'
import gameItemImage1 from '../../assets/images/gameItem1.png'
import gameItemImage2 from '../../assets/images/gameItem2.png'
import gameItemImage3 from '../../assets/images/gameItem3.png'
import GameItem from './components/GameItem'

const gameItem_data = [
  {
    image: gameItemImage1,
    heading_text: 'END GAME',
    developer_name: 'Look labs',
    description:
      'End Game is an apocalyptic adventure, an exploration of good and evil. In End Game, you will be forced to battle for your lives, and pushed to uncover the hero… or the villain within…',
    gener: 'Match-Three',
    development_status: 'Live',
    platform: 'Browser',
    href: 'https://end.game/',
  },
  {
    image: gameItemImage2,
    heading_text: 'END GAME',
    developer_name: 'Look labs',
    description:
      'Gen0 Buds are used to breed and stake in 420.game. There is an initial supply of 20,000 Gen0 Buds.These buds can be staked in 420.game to yield the in-game utility token, "$HIGH". The utility of the token is purely within the 420.game ecosystem.',
    gener: 'Match-Three',
    development_status: 'Live',
    platform: 'Browser',
    href: 'https://www.420.game/',
  },
  {
    image: gameItemImage3,
    heading_text: 'Coming soon',
    developer_name: 'Look labs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non turpis pretium, tincidunt mauris non, tempor magna. Donec dignissim est vel arcu viverra faucibus.',
    gener: 'Match-Three',
    development_status: 'COMING SOON',
    platform: 'Browser',
    href: '',
  },
]

const Feature = () => {
  return (
    <div id="feature" className="feature--container">
      <h3 className="feature--container__heading text-center">
        Our featured Games
      </h3>
      <div className="feature--container__content">
        {gameItem_data.map((item, index) => (
          <GameItem
            key={index}
            image={item.image}
            headingText={item.heading_text}
            developerName={item.developer_name}
            description={item.description}
            gener={item.gener}
            developmentStatus={item.development_status}
            platform={item.platform}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}

export default Feature
