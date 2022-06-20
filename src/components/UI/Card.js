import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // eredita le classi
    return <div className={classes}>{props.children}</div>
}

export default Card;