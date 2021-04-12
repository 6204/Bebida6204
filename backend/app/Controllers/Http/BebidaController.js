'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Bebida = use('App/Models/Bebida');
/**
 * Resourceful controller for interacting with bebidas
 */
class BebidaController {
  /**
   * Show a list of all bebidas.
   * GET bebidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const bebidas = await Bebida.all();
    return bebidas 
  }

  /**
   * Render a form to be used for creating a new bebida.
   * GET bebidas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new bebida.
   * POST bebidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['name','categoria_id','teor'])
    const bebida = await Bebida.create(data)
    return bebida
  }

  /**
   * Display a single bebida.
   * GET bebidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const bebida = await Bebida.findOrFail(params.id)
    return bebida
  }

  /**
   * Render a form to update an existing bebida.
   * GET bebidas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update bebida details.
   * PUT or PATCH bebidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const bebida = await Bebida.findOrFail(params.id)
    if(bebida){
      bebida.merge(request.only(['name','teor']))
      bebida.save()
    }
    return bebida
  }

  /**
   * Delete a bebida with id.
   * DELETE bebidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, auth, response }) {
    const bebida = await Bebida.findOrFail(params.id)
    
    await bebida.delete()

  }
}

module.exports = BebidaController
