import React, { Component } from 'react';
import api from "../../../services/api";
import { Container } from './styles';
import Breadcrumb from '../../components/Breadcrumb';

export default class Products extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            //guarda produtos;
            products: [],
        };
    }

    componentDidMount(){
        //Carrega produtos ao criar componente
        this.loadProducts();
    }

    loadProducts = async () => {

        const response = await api.get("/products");

        this.setState({ products: response.data});

    }

    
 
    render() {
        //define a variavel que referencia o estado
        const products = this.state.products;
    return ( 
        <Container>
            <table className="product-list">
                <thead>
                    <tr>
                        <td>Produto</td>
                        <td>Descrição</td>
                        <td>Preço</td>
                        <td>Custo</td>
                        <td>Nota</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => 
                            (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.cost}</td>
                                    <td>{product.note}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
         </Container>
    );
  }
}
