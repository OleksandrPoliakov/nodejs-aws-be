import 'source-map-support/register';
import { APIGatewayProxyResult } from 'aws-lambda';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { loadProducts } from '../../db';

export const getProductsList = async (): Promise<APIGatewayProxyResult> => {
  try {
    const products = await loadProducts();
    if (products && products.length > 0) {
      return formatJSONResponse({ products });
    }
    return formatJSONResponse({ message: 'Something goes wrong.' }, 404);
  } catch {
    return formatJSONResponse({ message: 'Something goes wrong.' }, 500);
  }
};

export const main = middyfy(getProductsList);
