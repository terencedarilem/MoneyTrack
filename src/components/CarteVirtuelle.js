import React from 'react';  
import { QRCodeCanvas } from 'qrcode.react';  
import './CarteVirtuelle.css';  

const CarteVirtuelle = () => {  
  return (  
    <div className="carte-virtuelle">  
      <div className="carte-virtuelle-container">  
        <div className="carte-virtuelle-header">  
          <h2>MONEYTRACK</h2>  
        </div>  
        <div className="carte-virtuelle-body">  
          <div className="carte-virtuelle-box">  
            <label>Numéro de carte :</label>  
            <input type="text" value="1234 5678 9012 3456" />  
          </div>  
          <div className="carte-virtuelle-box">  
            <label>Nom du titulaire :</label>  
            <input type="text" value="Nom de l'utilisateur" />  
          </div>  
          <div className="carte-virtuelle-box">  
            <label>Date d'expiration :</label>  
            <input type="text" value="12/2025" />  
          </div>  
          <div className="carte-virtuelle-box">  
            <label>Code de sécurité :</label>  
            <input type="text" value="***" />  
          </div>  
        </div>  
        <div className="carte-virtuelle-footer">  
          <div className="code-qrcode">  
            <QRCodeCanvas value="https://example.com" size={120} includeMargin={true} />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default CarteVirtuelle;