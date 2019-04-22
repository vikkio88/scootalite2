import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Card, Spinner } from '../common';
import { remoteFetchTrends } from '../../store/actions';


class TrendingShowsV extends Component {

    componentWillMount() {
        this.props.remoteFetchTrends();
    }

    render() {
        const { trendingShows, history } = this.props;
        if (!trendingShows.length) {
            return <Spinner />;
        }

        return (
            <Card.Grid>
                <Fragment>
                    {trendingShows.map(s => (
                        <Card
                            key={s.id}
                            title={s.title}
                            subtitle={s.description}
                            image={s.image}
                            onClick={() => history.push('/about/')}
                        />
                    ))}
                </Fragment>
            </Card.Grid>
        );
    }
}


const mapStateToProps = ({ podcasts }) => {
    const { trendingShows } = podcasts;
    return {
        trendingShows
    };
};

const mapDispatchToProps = dispatch => {
    return {
        remoteFetchTrends() {
            dispatch(remoteFetchTrends())
        }
    };
};

const TrendingShows = connect(
    mapStateToProps, mapDispatchToProps
)(TrendingShowsV);

export { TrendingShows };