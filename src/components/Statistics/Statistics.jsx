import PropTypes from 'prop-types';

import { StatisticsTitle } from "components/Statistics/StatisticsTitle/StatisticsTitle";
import { StatisticsList } from "components/Statistics/StatisticsList/StatisticsList";
import css from "./Statistics.module.css"

export const Statistics = (data) => {
    return (
        <section className={css.statistics}>
            <StatisticsTitle text={"Upload stats"} />
            <StatisticsList data={data} />
        </section>
    )
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}
