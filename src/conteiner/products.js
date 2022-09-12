import React from 'react';
import Card from '../components/card';

const Products = () => {
    return (
        <>
            <div className='conteiner-products'>
                <Card
                imagen="https://http2.mlstatic.com/D_NQ_NP_702021-MLA43703742665_102020-O.jpg"
                marca="Iphone 7"
                modelo="Plus 64 GB"
                precio="240"/>
                <Card
                imagen="https://http2.mlstatic.com/D_NQ_NP_770422-MLA50638694136_072022-V.jpg"
                marca="Iphone 8"
                modelo="64 GB"
                precio="250"/>
                <Card 
                imagen="https://i.pinimg.com/originals/42/98/74/4298741daed485a38b400f2ef69098f5.jpg"
                marca="Iphone X"
                modelo="64 GB gris"
                precio="600"/>
                <Card 
                imagen="https://falabella.scene7.com/is/image/Falabella/14673166_3?wid=800&hei=800&qlt=70"
                marca="Iphone 11"
                modelo="124 GB negro"
                precio="600"/>
                <Card 
                imagen="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/iphone_12_pro_iphone_12_iphone_11_battery_life.jpg"
                marca="Iphone 12 Pro"
                modelo="124 GB"
                precio="600"/>
                <Card 
                imagen="https://www.apple.com/newsroom/images/product/iphone/geo/Apple_HowToBuy_iPhone-13-Pro_GEO_09162021_carousel.jpg.large.jpg"
                marca="Iphone 13 Pro"
                modelo="128 GB"
                precio="600"/>
            </div>
        </>
    );
}

export default Products;
