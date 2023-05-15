import {Component} from "react";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Bánh mì',
                    price: 3000
                },
                {
                    name: 'Bánh cáy',
                    price: 2000
                }
            ],
            inputName: '',
            inputPrice: ''
        }
    }

    add = () => {
        this.setState(
            {
                products: [...this.state.products, {
                    name: this.state.inputName,
                    price: this.state.inputPrice
                }],
                inputName: '',
                inputPrice: '',
                editIndex: -1
            }
        )
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    delete = (index) => {
        const listProduct = [...this.state.products];
        listProduct.splice(index,1)
        this.setState({products:listProduct})
    }

    edit = (index) => {
        this.setState({
            inputName: this.state.products[index].name,
            inputPrice: this.state.products[index].price,
            editIndex: index,
        })
    }

    update = () => {
        const listProduct = this.state.products.slice();
        const {inputName,inputPrice,editIndex} = this.state;
        listProduct[editIndex] = {
            name: inputName,
            price: inputPrice
        };
        this.setState({
            products: listProduct,
            inputName:'',
            inputPrice:'',
            editIndex: -1
        });
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.inputName} name={'inputName'} placeholder={'Name'}
                       onChange={(e) => {
                           this.changeValue(e)
                       }}/>
                <input type="text" value={this.state.inputPrice} name={'inputPrice'} placeholder={'Price'}
                       onChange={this.changeValue}/>
                <button onClick={this.add}>Add</button>
                <button onClick={this.update}>update</button>
                {this.state.products.map((item, index) =>
                    (<h1 key={index}>Name: {item.name} | Price: {item.price} $
                        <button onClick={() => this.delete(index)}>Delete</button>
                        <button onClick={() => this.edit(index)}>Edit</button>
                    </h1>)
                )}
            </>
        )
    }
}