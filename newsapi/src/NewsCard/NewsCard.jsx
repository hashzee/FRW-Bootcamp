import React, { useState } from 'react';
import styles from './NewsCard.module.css';



const NewsCard = ({key, news}) => {

    const [isModal, setIsModal] = useState(false);

    const showModal = (title) => {
        setIsModal(true);
    }
    
    const hideModal = () => {
        setIsModal(false);
    }

    return (
        <>
            <Modal show={isModal} handleClose={hideModal}>
                <h1>{news.title}</h1>
                <h2>{news.name}</h2>
                <h3>{news.publishedAt}</h3>
                <div>
                    <img src={news.urlToImage} alt={news.title} />
                </div>
                <p>{news.content}</p>
            </Modal>
            
            <div className={styles.NewsCard} key={key}>
                <img src={news.urlToImage} alt='' className={styles.NewsCardImage} />
                <div className={styles.NewsBody}>
                    <h4>{news.title}</h4>
                    <p>
                        <em>{news.name}</em>
                    </p>
                    <button type='button' onClick={showModal}>Read More</button> 
                </div>
            </div>
        </>
    )
}


const Modal = ({ handleClose, show, children }) => {
    //const showHideClassName = show ? 'styles.modal styles.display-block' : 'styles.modal styles.display-none';

    return (
      <div className={show?styles.modal:styles.nomodal}>
        <section className={styles.modalMain}>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };
export default NewsCard
