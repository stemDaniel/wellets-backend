import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

import IndexCustomCurrenciesService from 'Modules/Currencies/Services/IndexCustomCurrenciesService';
import CreateCustomCurrencyService from 'Modules/Currencies/Services/CreateCustomCurrencyService';
import UpdateCustomCurrencyService from 'Modules/Currencies/Services/UpdateCustomCurrencyService';

class CustomCurrenciesController {
  public async index(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { user } = request;
    const id = user && user.id ? user.id : '';

    const indexCustomCurrencies = container.resolve(
      IndexCustomCurrenciesService,
    );

    const currencies = await indexCustomCurrencies.execute(id);

    return response.json(currencies);
  }

  public async create(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { id } = request.user;
    const { acronym, alias, dollar_rate, format } = request.body;

    const createCustomCurrency = container.resolve(CreateCustomCurrencyService);

    const currency = await createCustomCurrency.execute({
      user_id: id,
      acronym,
      alias,
      dollar_rate,
      format,
    });

    return response.json(currency);
  }

  public async update(
    request: Request,
    response: Response,
    _: NextFunction,
  ): Promise<Response> {
    const { user } = request;
    const { id } = request.params;
    const { acronym, alias, dollar_rate, format } = request.body;

    const updateCustomCurrency = container.resolve(UpdateCustomCurrencyService);

    const currency = await updateCustomCurrency.execute({
      user_id: user.id,
      acronym,
      alias,
      dollar_rate,
      format,
      id,
    });

    return response.json(currency);
  }
}

export default CustomCurrenciesController;
