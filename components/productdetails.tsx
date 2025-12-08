"use client";

import React, { FC } from "react";
import "./ProductModal.css";

interface Product {
  id: string;
  name: string;
  info: string;
  imageUrl: string;
  location: string;
}

interface ProductModalProps {
  showModal: boolean;
  selectedProduct: Product | null;
  closeModal: () => void;
}

const ProductModal: FC<ProductModalProps> = ({
  showModal,
  selectedProduct,
  closeModal,
}) => {
  if (!showModal || !selectedProduct) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>

        <div className="modal-body">
          <div className="image-column">
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
          </div>
          <div className="details-column">
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

