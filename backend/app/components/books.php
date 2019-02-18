<?php

use \Psr\Http\Message\ServerRequestInterface as request;

$app->group('/books', function () {
    $this->post('/getBooks', function () {
        $json = '{
  "msg": "bien hecho, en este punto estamos seguros de que tu prueba será todo un éxito.",
  "libro": "prueba del saber 3.0",
  "preguntas": [
    {
      "contexto": "contex 1",
      "pregunta": "What is Lorem Ipsum?",
      "respuestas": [
        {
          "contenido": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          "correcta": true,
          "respondio": false
        },
        {
          "contenido": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        }
      ]
    },{
      "contexto": "contex 2",
      "pregunta": "pregun 2",
      "respuestas": [
        {
          "contenido": false,
          "correcta": true,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        }
      ]
    },{
      "contexto": "contex 3",
      "pregunta": "pregun 3",
      "respuestas": [
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": true,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        }
      ]
    },{
      "contexto": "contex 4",
      "pregunta": "pregun 4",
      "respuestas": [
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": true,
          "respondio": false
        }
      ]
    },{
      "contexto": "contex 5",
      "pregunta": "pregun 5",
      "respuestas": [
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": false,
          "respondio": false
        },
        {
          "contenido": false,
          "correcta": true,
          "respondio": false
        }
      ]
    }
  ]
}';
        echo $json;
    });
});




