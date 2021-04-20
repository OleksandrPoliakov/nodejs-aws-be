import 'source-map-support/register';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { loadProduct } from '../../db';

export const getProductsById = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event.pathParameters;
    if (id === undefined) {
      formatJSONResponse({ message: 'Product id should be provided.' }, 404);
    }
    const product = await loadProduct(id);

    if (product) {
      return formatJSONResponse({ product });
    }

    return formatJSONResponse({ message: 'There is no such product' }, 404);
  } catch (error) {
    return formatJSONResponse({ message: 'Something goes wrong.' }, 500);
  }
};

export const main = middyfy(getProductsById);
