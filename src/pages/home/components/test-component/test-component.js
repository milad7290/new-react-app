import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { ErrorBoundary } from "../../../../helper/error-boundary/error-boundary";
import WithLoading from "../../../../helper/loading-section/loading-section";
import SubTestComponent from "./subtest-component/subtest-component";
import "./test-component.scss";

class TestComponent extends PureComponent {
  render() {
    const { postList } = this.props;
    // const { activeStep } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>aaaalebaaama</p>
          <ErrorBoundary>
            <SubTestComponent postList={postList}></SubTestComponent>
          </ErrorBoundary>
        </header>
      </div>
    );
  }
}

TestComponent.propTypes = {
  postList: PropTypes.array,
};

export default WithLoading(TestComponent);
