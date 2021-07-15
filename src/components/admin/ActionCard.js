import React from 'react';
import styles from '../../styles/Blogger.module.css';

const ActionCard = ({ actionName, onClickHandler, id }) => {
	return (
		<button id={id} onClick={onClickHandler} className={styles.actionCard}>
			{actionName}
		</button>
	);
};

export default ActionCard;
