import React, { Component } from 'react'

type Product = {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
}

type ProductFormProps = Record<string,never>;
type ProductFormState = Product;

export default class ProductForm extends Component<ProductFormProps,ProductFormState> {
    constructor(props:ProductFormProps){
        super(props);
        this.state={
            productCode:"",
            productName:"",
            price:0,
            quantity:1,
        }
    }

    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;

        this.setState(prev=>({
            ...prev,
            [name]:name==="price"||name==="quantity"?Number(value):value,
        }) as ProductFormState);
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const product:Product = {...this.state};
        console.log(product);
    }
  render() {

    const {productCode,productName,price,quantity}=this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          width: 360,
          margin: "32px auto",
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 6px 24px rgba(0,0,0,.08)",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 16 }}>Thêm mới sản phẩm</h2>

        <label>Mã sản phẩm</label>
        <input
          name="productCode"
          value={productCode}
          onChange={this.handleChange}
          placeholder="SP001"
          className="input"
          style={{ width: "100%", marginBottom: 12, padding: 10 }}
        />

        <label>Tên sản phẩm</label>
        <input
          name="productName"
          value={productName}
          onChange={this.handleChange}
          placeholder="Cam da xanh"
          style={{ width: "100%", marginBottom: 12, padding: 10 }}
        />

        <label>Giá</label>
        <input
          name="price"
          type="number"
          value={price}
          onChange={this.handleChange}
          placeholder="20000"
          min={0}
          style={{ width: "100%", marginBottom: 12, padding: 10 }}
        />

        <label>Số lượng</label>
        <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={this.handleChange}
            placeholder="Nhập số lượng"
            min={0}
            style={{ width: "100%", marginBottom: 16, padding: 10 }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Đăng ký
        </button>
      </form>
    )
  }
}
