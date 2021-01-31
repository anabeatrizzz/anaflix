// --- Pacotes ---
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Definindo valores para propriedades não obrigatorias */
FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  sugestoes: []
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  sugestoes: PropTypes.arrayOf(PropTypes.string)
};

function FormField({ label, type, name, value, onChange, sugestoes }){
  const fieldId = `id_${name}`;
  const ehTextArea = type === 'textarea';
  const tag = ehTextArea ? 'textarea' : 'input';
  const temSugestao = Boolean(sugestoes.length);
  
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input 
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={temSugestao ? "off" : "on"}
          list={temSugestao ? `sugestoesPara_${fieldId}` : undefined}
        />
        
        <Label.Text>{label}:</Label.Text>
        
        {
          temSugestao && (
            <datalist id={`sugestoesPara_${fieldId}`}>
              {
                sugestoes.map((sugestao) => [
                  <option
                    value={sugestao}
                    key={`sugestoesPara_${fieldId}option${sugestao}`}
                  >
                    {sugestao}
                  </option>
                ])
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

const FormFieldWrapper = styled.div`
	position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
	background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  /* Aplicando o efeito em todos os inputs menos naquele que tem type="color" */
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  /* Aplicando o efeito quando se digita nos inputs */
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && `
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

export default FormField;