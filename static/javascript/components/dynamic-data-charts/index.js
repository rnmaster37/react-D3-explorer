import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import DynamicBarChart from './dynamic-bar-chart';

export default class DynamicCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/basic`}>Basic</NavLink>
          </li>
        </ul>

        <div className="dynamic-chart">
          <Route path={`${match.url}/basic`} component={DynamicBarChart}/>
        </div>
      </div>
    );
  }
};