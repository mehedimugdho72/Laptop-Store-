import React, { useState } from 'react'
import '../Home.css'
function Cart(props) {
    const addedProduct = props.added;
    const [yourProduct, setYourProduct] = useState({})

    const removeThis = (first) => {
        console.log(first)
    }
    const chooseForMe = () => {

        const selectedProduct = Math.floor((Math.random() * 9) + 1);

        const exists = addedProduct.find(product => product.id === selectedProduct);
        if (exists) {
            if (exists.id === selectedProduct) {
                setYourProduct(exists)
            }
        } else {
            document.getElementById('noselection').style.display="flex"
        }
    }

    const resetYour = () => {
        setYourProduct('')
        props.reset()
    }
   
    const close = ()=>{
        document.getElementById('noselection').style.display="none"
    }
    return (
        <div className='product-cart'>
            <h1>selected Product</h1>
            {
                addedProduct.map(product => {
                    return (
                        <div className='mt-2 added-product' key={product.id}>
                            <h5 className='mb-0'>{product.name}</h5>
                            <button className='btn btn-sm btn-outline-danger' onClick={() => removeThis(product)}>Remove</button>
                        </div>
                    )
                })
            }
            <div className='mt-3 '>
                <button onClick={chooseForMe} className='btn btn-sm btn-success d-block p-2'>CHOOSE 1 FOR ME </button>
                <button onClick={resetYour} className='btn btn-sm btn-outline-danger mt-3 p-2'>CHOOSE AGAIN </button>

            </div>
            <div className='wined-Product mt-5'>
                <h4 className='text-center my-3'>{yourProduct.name}</h4>
                <img src={yourProduct.image} />
            </div>
            <div id='noselection' className='alert-box fixed-top'>
                <h1>Sorry Apnar Kopal Kharap Try Agai </h1>
                <i className="fa-solid fa-face-frown fs-1 text-primary"></i>
                <i onClick={close} className="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
}

export default Cart