import { randomColor } from 'utils/randomColor'

import css from './StatisticsList.module.css'

export const StatisticsList = ({ data }) => {
    return <ul className={css.stat__list}>
            {data.items.map(item => <li className={css.item} key= {item.id} style = {{backgroundColor: randomColor()}}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
        </li>)}
            </ul>
}