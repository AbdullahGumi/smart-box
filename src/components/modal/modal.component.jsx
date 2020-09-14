import React from 'react';
import ReactDom from 'react-dom';
import './modal.styles.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
	constructor(props){
		super(props);
		this.el = document.createElement('div');

	}

	componentDidMount() {
		modalRoot.appendChild(this.el)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render(){
		return ReactDom.createPortal(this.props.children, this.el)
	}
}

export default Modal;