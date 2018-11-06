import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetails extends Component {
    render() {
        if (!this.props.active) {
            return <div></div>;
        }
        return (
            <div>
                <div class="ui huge rounded left floated top aligned image">
                    <img src={this.props.active.img} />
                </div>
                <div class="ui middle aligned card">
                    <div class="content">
                        <a class="header">{this.props.active.name}</a>
                        <div class="meta">{this.props.active.description}</div>
                        <div class="description">>Price: ${this.props.active.price}</div>
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