import { css } from "lit-element";
export default css `
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}


input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
} 

input,
textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #0069d9;
}
`;
