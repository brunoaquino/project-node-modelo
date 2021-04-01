 process.env['NODE_ENV'] = 'production';
 const app = require('./src/app');
 const port = process.env.PORT || 3000;
 app.listen(port, () => {
   console.log('Aplicação executando na porta ', port);
   console.log('Ambiente ', process.env.NODE_ENV);
 });

