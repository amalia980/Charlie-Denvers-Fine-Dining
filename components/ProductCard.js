import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'
import { Box } from '@material-ui/core'
import Link from 'next/link'

const ProductCard = ({ item }) => {
  return (
    <>
      <Link href={`/Product/${item._id}`}>
        <Card
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          color="transparent"
          className={styles.card_container}
        >
          <CardActionArea>
            <Image height="200px" width="250px" src={item.img} className={styles.img} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: 'white' }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" style={{ color: 'white' }}>
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  )
}

export default ProductCard
