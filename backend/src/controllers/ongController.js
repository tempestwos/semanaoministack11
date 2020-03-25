const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf} = request.body
    const id = crypto.randomBytes(5).toString('HEX')
    
    await connection('ongs').insert({
        id,
        name, 
        email,
        whatsapp,
        city,
        uf
      });
    
    let resposta = { id }
  
    let r = response.json(resposta);
    return r;
  },
  async index (request, response) {
    const ongs = await connection('ongs').select('*');
  
    console.log(ongs)
    return response.json(ongs)
  }
}
