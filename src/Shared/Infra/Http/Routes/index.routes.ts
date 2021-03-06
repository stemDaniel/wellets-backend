import { Router } from 'express';

import currenciesRoutes from 'Modules/Currencies/Infra/Http/Routes/index.routes';
import transactionsRoutes from 'Modules/Transactions/Infra/Http/Routes/Transactions.routes';
import transfersRoutes from 'Modules/Transfers/Infra/Http/Routes/Transfers.routes';
import usersRoutes from 'Modules/Users/Infra/Http/Routes/index.routes';
import walletsRoutes from 'Modules/Wallets/Infra/Http/Routes/Wallets.routes';

const routes = Router();

routes.use('/currencies', currenciesRoutes);
routes.use('/transactions', transactionsRoutes);
routes.use('/transfers', transfersRoutes);
routes.use('/users', usersRoutes);
routes.use('/wallets', walletsRoutes);

export default routes;
