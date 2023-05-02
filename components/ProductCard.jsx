import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';
import Link from 'next/link';

const ProductCard = ({ item }) => {

  return (
    <div>
      <Link href={`/product/${item._id}/`}>
      <Card
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          color="transparent"
          className={styles.card_container}
      >
          <CardActionArea>
            <Image height="200" width="250" src={item.img} className={styles.img} alt={item.title} />
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
    </div>
  )
}

export default ProductCard;
