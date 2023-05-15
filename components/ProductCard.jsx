import * as React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';
import Link from 'next/link';

const ProductCard = ({ item }) => {

  return (
    <div>
      <Link href={`/product/${item._id}/`}>
      <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          color="transparent"
          className={styles.card_container}
      >
          <span>
            <Image height="200" width="250" src={item.img} className={styles.img} alt={item.title} />
            <div>
              <h4
                style={{ color: 'white' }}
              >
                {item.title}
              </h4>
              <p style={{ color: 'white' }}>
                {item.description}
              </p>
            </div>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;
