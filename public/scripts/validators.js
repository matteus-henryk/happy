const fields = document.querySelectorAll("[required]");
console.log(fields);

function ValidateField(field) {
  // verificar se existe erros
  function verifyErrors() {
    let foundError = false;

    for (let error in field.validity) {
      // se não for customError
      // então verifica se tem erro
      if (field.validity[error] && !field.validity.valid) {
        foundError = error;
      }
    }
    return foundError;
  }

  function customMessage(typeError) {
    const messages = {
      text: {
        valueMissing: 'Preencha este campo!'
      },
      email: {
        valueMissing: 'Preencha este compo!',
        typeMismatch: 'Preencha com um e-mail valido'
      },
      url: {
        valueMissing: 'Preencha este compo!',
        typeMismatch: 'Preencha com uma URL valida'
      }
    }

    return messages[field.type][typeError];
  }

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector("span.error");
    console.log(spanError)

    if (message) {
      spanError.classList.add("active");
      spanError.innerHTML = message;
    } else {
      spanError.classList.remove("active");
      spanError.innerHTML = "";
    }
  }

  return function () {
    const error = verifyErrors();
    if (error) {
      const message = customMessage(error);
      field.classList.add('error');
      setCustomMessage(message);
    } else {
      field.classList.remove('error');
      setCustomMessage();
    }
  };
}

function customValidation(event) {
  const field = event.target;
  const validation = ValidateField(field);
  validation();
}

for (field of fields) {
  field.addEventListener("invalid", (event) => {
    // eliminar o bubble
    event.preventDefault();
    customValidation(event);
  });
  field.addEventListener("blur", customValidation);
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

const instructions = document.querySelector('#instructions').addEventListener('blur', () => {
  if(instructions.value = ''){
    instructions.classList.add('error');
    instructions.parentNode.querySelector('span.error').innerHTML = 'Reencha este campo!';
  } else {
    instructions.classList.remove('error');
    instructions.parentNode.querySelector('span.error').innerHTML = '';
  }
})

const about = document.querySelector('#about').addEventListener('blur', () => {
  console.log(about.value);
  if(about.value = ''){
    about.classList.add('error');
    about.parentNode.querySelector('span.error').innerHTML = 'Reencha este campo!';
  } else {
    about.classList.remove('error');
    about.parentNode.querySelector('span.error').innerHTML = '';
  }
})

console.log(document.querySelector('input[type=url]').validity)