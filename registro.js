import React from 'react'


import axios from 'axios'


import './registro.css'



    <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="user@email.com" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="Password">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
    </Form.Row>
  
    <Form.Group controlId="Rua">
      <Form.Label>Rua</Form.Label>
      <Form.Control placeholder="1234 Rua Exemplo" />
    </Form.Group>
  
    
  
    <Form.Row>
      <Form.Group as={Col} controlId="City">
        <Form.Label>Cidade</Form.Label>
        <Form.Control />
      </Form.Group>
  
      <Form.Group as={Col} controlId="State">
        <Form.Label>Estado</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Escolha...</option>
          <option>AC</option>
          <option>AL</option>
          <option>AP</option>
          <option>AM</option>
          <option>BA</option>
          <option>CE</option>
          <option>ES</option>
          <option>GO</option>
          <option>MA</option>
          <option>MT</option>
          <option>MS</option>
          <option>MG</option>
          <option>PA</option>
          <option>PB</option>
          <option>PR</option>
          <option>PE</option>
          <option>PI</option>
          <option>RJ</option>
          <option>RN</option>
          <option>RS</option>
          <option>RO</option>
          <option>RR</option>
          <option>SC</option>
          <option>SP</option>
          <option>SE</option>
          <option>TO</option>
          <option>DF</option>
        </Form.Control>
      </Form.Group>
  
      <Form.Group as={Col} controlId="Zip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>
  
    <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="Quer receber email informativos?" />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Registrar
    </Button>
  </Form>
