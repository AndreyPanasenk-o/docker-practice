import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetails extends Component {
    render() {
        if (!this.props.active) {
            return <div></div>;
        }
        return (
            <div>
                <div className="ui huge rounded left floated top aligned image">
                    <img src={this.props.active.mainImageUrl} />
                </div>
                <div className="ui middle aligned card">
                    <div className="content">
                        <a className="header">{this.props.active.name}</a>
                        <div className="meta">{this.props.active.description}</div>
                        <div className="description">>Price: ${this.props.active.price}</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        active: state.activeProduct
    }
}

export default connect(mapStateToProps)(ProductDetails);