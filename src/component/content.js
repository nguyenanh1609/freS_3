import { Component } from "react";

class Content extends Component {
    render() {
        return (
            <div className="col-lg-4 py-3">
                <div className="card text-white bg-success">
                    <img className="card-img-top w-100" src={this.props.anh} alt={this.props.name}/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">{this.props.gia}VND</p>
                        <a name="" id="" className="btn btn-danger" href="#root" role="button">mua ngay</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Content;
