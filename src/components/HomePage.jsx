import React from 'react';
import { TAB_TITLE_MAP, TABS } from '../constants/constants';
import GraphComponent from './GraphComponent';
import InfiniteCanvas from './InfiniteCanvas';
import '../style/_homePage.scss';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [TABS.GRAPH, TABS.INFINITE_CANVAS],
      activeTab: TABS.GRAPH
    }
  }
  renderTabs = () => {
    const { tabs, activeTab } = this.state;
    return (
    <div className={"tab-container"}>{
      tabs.map(tab => (
        <span
          className={`tab ${tab=== activeTab ? 'active': ''}`}
          key={tab}
          onClick={() => {
            this.setState({
              activeTab: tab
            })
          }}
        >{TAB_TITLE_MAP[tab]}
        </span>
      ))
    }
    </div>);
  }
  render (){
    const { activeTab } = this.state;
    return (
      <div className={"home-container"}>
        {this.renderTabs()}
        {
          activeTab === TABS.GRAPH
            ? (<GraphComponent />)
            : <InfiniteCanvas />
        }
    </div>
    );
  };
}

export default HomePage
