import { css } from "lit-element";
export default css `
section {
  position: relative;
  z-index: 1;
}

componente-formulario {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 50%;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  header h1 {
    font-size: 36px;
    margin: 0;
  }
  header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  header nav li {
    display: inline-block;
    margin-right: 20px;
  }
  header nav li:last-child {
    margin-right: 0;
  }
  header nav a {
    color: #fff;
    text-decoration: none;
  }
  footer {
    background-color: #f2f2f2;
    color: #333;
    padding: 20px;
    text-align: center;
  }
  
.contenido{
    max-width: 1200px;
    width: 100%;
    margin: 40px auto;
    display: flex;
}
.mostrador{
    width: 100%;
}
.mostrador .fila{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
}

.mostrador .fila .item{
    max-width: 210px;
    padding: 30px;
    height: 250px;
    text-align: center;
    margin: 0 10px;
    border-radius: 5px;
}

.mostrador .fila .item img{
    width: 100%;
    margin: 35px 0;
}

.item img {
    width: 100px;
    height: 170px;
    object-fit: cover;
  }

.mostrador .fila .item .edad{
    color: #f85151;
    font-weight: bold;
    font-size: 20px;
}

.button {
    background-color: #BA4A00;
    border: 2rem;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #212F3C ;
  }

`