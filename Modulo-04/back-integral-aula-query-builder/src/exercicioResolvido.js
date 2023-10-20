// 1- const resultado = await knex('farmacia').count()
// 2- const resultado = await knex('usuarios').min('idade')
// 3- const resultado = await knex('farmacia').whereNotNull('categoria').sum('estoque').debug()
// 4- const resultado = await knex('farmacia').whereNull('categoria').sum('estoque').debug()
//5- const local = "categoria"
//const resultado = await knex('farmacia').select(local).whereNotNull(local).groupBy(local).count().debug()
//6- const resultado = await knex('usuarios').select('idade').where('idade', '>=', 18).groupBy("idade").count().debug()