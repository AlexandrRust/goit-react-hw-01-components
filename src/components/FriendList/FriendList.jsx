import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friends__list}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className ={classNames(css.status__span, friend.isOnline ? css.online : css.ofline)}></span>
                    <img className={css.avatar} src={friend.avatar} alt={friend.name} width="52" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf)
}