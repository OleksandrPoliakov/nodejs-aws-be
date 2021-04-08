import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getProductsById } from './handler';

describe('getProductsById handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return successful response', async () => {
    const event = ({
      pathParameters: { id: '8cd7f886-04c6-4ef2-9098-751815597387' },
    } as unknown) as APIGatewayProxyEvent;
    const result: APIGatewayProxyResult = await getProductsById(event);

    expect(result.statusCode).toEqual(200);
  });
});
